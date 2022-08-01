import { Service } from "typedi";
import {NextFunction, Request, Response} from "express";
import { SuccessResponse } from "../../base/models/dto/response/success/SuccessResponse";
import { FlashcardService } from "../services/FlashcardService";
import { CreateFlashcardRequest  } from "../models/dto/request/flashcard/CreateFlashcardRequest";
import { CreateFlashcardResponse } from "../models/dto/response/flashcard/CreateFlashcardResponse";
import { GetFlashcardsResponse } from "../models/dto/response/flashcard/GetFlashcardsResponse";
import { GetFlashcardByIdResponse } from "../models/dto/response/flashcard/GetFlashcardByIdResponse";
import { NoContentResponse } from "../../base/models/dto/response/success/NoContentResponse";
import { UpdateFlashcardByIdResponse } from "../models/dto/response/flashcard/UpdateFlashcardByIdResponse";
import { getRequestUserId } from "../utils/RequestUtils";
@Service()
export class FlashcardController {
    constructor(private readonly service: FlashcardService){
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {            
            const request: CreateFlashcardRequest = req.body;
            const userId = getRequestUserId(req);
            const result = await this.service.create(request, userId)
            next(new SuccessResponse(new CreateFlashcardResponse(result)));
        } catch (e) {
            return next(e)
        }
    }
    
    public async get(req: Request, res: Response, next: NextFunction) {
        try {            
            const {limit, start, sort, query} = req.query as any;
            const userId = getRequestUserId(req);
            const result = await this.service.get(limit, start, sort, query, userId)
            next(new SuccessResponse(new GetFlashcardsResponse(result.items.map(value => new GetFlashcardByIdResponse(value)), result.start, result.limit, result.totalItems, result.sort, result.query)))
        } catch (e) {
            return next(e)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;            
            const userId = getRequestUserId(req);
            const result = await this.service.getById(id,userId)
            next(new SuccessResponse(new GetFlashcardByIdResponse(result)))
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
            next(new SuccessResponse(new UpdateFlashcardByIdResponse(result)))
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