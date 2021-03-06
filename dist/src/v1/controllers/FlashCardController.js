"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardController = void 0;
const typedi_1 = require("typedi");
const SuccessResponse_1 = require("../../base/models/dto/response/success/SuccessResponse");
const FlashcardService_1 = require("../services/FlashcardService");
const CreateFlashcardResponse_1 = require("../models/dto/response/flashcard/CreateFlashcardResponse");
const GetFlashcardsResponse_1 = require("../models/dto/response/flashcard/GetFlashcardsResponse");
const GetFlashcardByIdResponse_1 = require("../models/dto/response/flashcard/GetFlashcardByIdResponse");
const NoContentResponse_1 = require("../../base/models/dto/response/success/NoContentResponse");
const UpdateFlashcardByIdResponse_1 = require("../models/dto/response/flashcard/UpdateFlashcardByIdResponse");
const RequestUtils_1 = require("../utils/RequestUtils");
let FlashcardController = class FlashcardController {
    constructor(service) {
        this.service = service;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.service.create(request, userId);
                next(new SuccessResponse_1.SuccessResponse(new CreateFlashcardResponse_1.CreateFlashcardResponse(result)));
            }
            catch (e) {
                return next(e);
            }
        });
    }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { limit, start, sort, query } = req.query;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.service.get(limit, start, sort, query, userId);
                next(new SuccessResponse_1.SuccessResponse(new GetFlashcardsResponse_1.GetFlashcardsResponse(result.items.map(value => new GetFlashcardByIdResponse_1.GetFlashcardByIdResponse(value)), result.start, result.limit, result.totalItems, result.sort, result.query)));
            }
            catch (e) {
                return next(e);
            }
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.service.getById(id, userId);
                next(new SuccessResponse_1.SuccessResponse(new GetFlashcardByIdResponse_1.GetFlashcardByIdResponse(result)));
            }
            catch (e) {
                return next(e);
            }
        });
    }
    updateById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const request = req.body;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.service.updateById(id, request, userId);
                next(new SuccessResponse_1.SuccessResponse(new UpdateFlashcardByIdResponse_1.UpdateFlashcardByIdResponse(result)));
            }
            catch (e) {
                return next(e);
            }
        });
    }
    deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                yield this.service.deleteById(id, userId);
                next(new NoContentResponse_1.NoContentResponse());
            }
            catch (e) {
                return next(e);
            }
        });
    }
};
FlashcardController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [FlashcardService_1.FlashcardService])
], FlashcardController);
exports.FlashcardController = FlashcardController;
//# sourceMappingURL=FlashcardController.js.map