import { Inject, Service } from "typedi";
import { NextFunction, Request, Response } from "express";
import { SuccessResponse } from "../../base/models/dto/response/success/SuccessResponse";
import { CategoryService } from "../services/CategoryService";
import { CreateCategoryRequest } from "../models/dto/request/category/CreateCategoryRequest";
import { CreateCategoryResponse } from "../models/dto/response/category/CreateCategoryResponse";
import { GetCategoriesResponse } from "../models/dto/response/category/GetCategoriesResponse";
import { GetCategoryByIdResponse } from "../models/dto/response/category/GetCategoryByIdResponse";
import { NoContentResponse } from "../../base/models/dto/response/success/NoContentResponse";
import { UpdateCategoryByIdResponse } from "../models/dto/response/category/UpdateCategoryByIdResponse";
import { getRequestUserId } from "../utils/RequestUtils";
import { FlashCardService } from "../services/FlashCardService";
import { GetFlashCardsResponse } from "../models/dto/response/flashCard/GetFlashCardsResponse";
import { GetFlashCardByIdResponse } from "../models/dto/response/flashCard/GetFlashCardByIdResponse";
@Service()
export class CategoryController {
  @Inject()
  flashCardService: FlashCardService;

  constructor(private readonly service: CategoryService) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateCategoryRequest = req.body;
      const userId = getRequestUserId(req);
      const result = await this.service.create(request, userId);
      next(new SuccessResponse(new CreateCategoryResponse(result)));
    } catch (e) {
      return next(e);
    }
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, start, sort, query } = req.query as any;
      const userId = getRequestUserId(req);
      const result = await this.service.get(limit, start, sort, query, userId);
      next(
        new SuccessResponse(
          new GetCategoriesResponse(
            result.items.map((value) => new GetCategoryByIdResponse(value)),
            result.start,
            result.limit,
            result.totalItems,
            result.sort,
            result.query
          )
        )
      );
    } catch (e) {
      return next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const userId = getRequestUserId(req);
      const result = await this.service.getById(id, userId);
      next(new SuccessResponse(new GetCategoryByIdResponse(result)));
    } catch (e) {
      return next(e);
    }
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const request = req.body;
      const userId = getRequestUserId(req);
      const result = await this.service.updateById(id, request, userId);
      next(new SuccessResponse(new UpdateCategoryByIdResponse(result)));
    } catch (e) {
      return next(e);
    }
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const userId = getRequestUserId(req);
      await this.service.deleteById(id, userId);
      next(new NoContentResponse());
    } catch (e) {
      return next(e);
    }
  }

  public async getFlashCardsByCategoryId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;
      const { limit, start, sort, query } = req.query as any;
      const userId = getRequestUserId(req);

      const result = await this.flashCardService.getByCategoryId(
        limit,
        start,
        sort,
        query,
        id,
        userId
      );

      next(
        new SuccessResponse(
          new GetFlashCardsResponse(
            result.items.map((value) => new GetFlashCardByIdResponse(value)),
            result.start,
            result.limit,
            result.totalItems,
            result.sort,
            result.query
          )
        )
      );
    } catch (e) {
      return next(e);
    }
  }
}
