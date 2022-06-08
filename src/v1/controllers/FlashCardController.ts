import { Service } from "typedi";
import {NextFunction, Request, Response} from "express";
import { SuccessResponse } from "../../base/models/dto/response/success/SuccessResponse";
import { FlashCardService } from "../services/FlashCardService";
import { CreateFlashCardRequest } from "../models/dto/request/flashCard/CreateFlashCardRequest";
import { CreateFlashCardResponse } from "../models/dto/response/flashCard/CreateFlashCardResponse";
import { GetFlashCardsResponse } from "../models/dto/response/flashCard/GetFlashCardsResponse";
import { GetFlashCardByIdResponse } from "../models/dto/response/flashCard/GetFlashCardByIdResponse";
import { NoContentResponse } from "../../base/models/dto/response/success/NoContentResponse";
import { UpdateFlashCardByIdResponse } from "../models/dto/response/flashCard/UpdateFlashCardByIdResponse";
import { getRequestUserId } from "../utils/RequestUtils";
@Service()
export class FlashCardController {
    constructor(private readonly service: FlashCardService){
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {            
            const request: CreateFlashCardRequest = req.body;
            const userId = getRequestUserId(req);
            const result = await this.service.create(request, userId)
            next(new SuccessResponse(new CreateFlashCardResponse(result)));
        } catch (e) {
            return next(e)
        }
    }
    
    public async get(req: Request, res: Response, next: NextFunction) {
        try {            
            const {limit, start, sort, query} = req.query as any;
            const userId = getRequestUserId(req);
            const result = await this.service.get(limit, start, sort, query, userId)
            next(new SuccessResponse(new GetFlashCardsResponse(result.items.map(value => new GetFlashCardByIdResponse(value)), result.start, result.limit, result.totalItems, result.sort, result.query)))
        } catch (e) {
            return next(e)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;            
            const userId = getRequestUserId(req);
            const result = await this.service.getById(id,userId)
            next(new SuccessResponse(new GetFlashCardByIdResponse(result)))
        } catch (e) {
            return next(e)
        }
    }
    public async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const request = req.body;          
            const userId = getRequestUserId(req);  
            const result = await this.service.updateById(id, request,userId)
            next(new SuccessResponse(new UpdateFlashCardByIdResponse(result)))
        } catch (e) {
            return next(e)
        }
    }

    public async deleteById(req: Request, res: Response, next: NextFunction) {
        try {            
            const id = req.params.id;
            const userId = getRequestUserId(req);
            await this.service.deleteById(id,userId);
            next(new NoContentResponse())
        } catch (e) {
            return next(e)
        }
    }
}