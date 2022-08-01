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
exports.CategoryController = void 0;
const typedi_1 = require("typedi");
const SuccessResponse_1 = require("../../base/models/dto/response/success/SuccessResponse");
const CategoryService_1 = require("../services/CategoryService");
const CreateCategoryResponse_1 = require("../models/dto/response/category/CreateCategoryResponse");
const GetCategoriesResponse_1 = require("../models/dto/response/category/GetCategoriesResponse");
const GetCategoryByIdResponse_1 = require("../models/dto/response/category/GetCategoryByIdResponse");
const NoContentResponse_1 = require("../../base/models/dto/response/success/NoContentResponse");
const UpdateCategoryByIdResponse_1 = require("../models/dto/response/category/UpdateCategoryByIdResponse");
const RequestUtils_1 = require("../utils/RequestUtils");
const FlashcardService_1 = require("../services/FlashcardService");
const GetFlashcardsResponse_1 = require("../models/dto/response/flashcard/GetFlashcardsResponse");
const GetFlashcardByIdResponse_1 = require("../models/dto/response/flashcard/GetFlashcardByIdResponse");
let CategoryController = class CategoryController {
    constructor(service) {
        this.service = service;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.service.create(request, userId);
                next(new SuccessResponse_1.SuccessResponse(new CreateCategoryResponse_1.CreateCategoryResponse(result)));
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
                next(new SuccessResponse_1.SuccessResponse(new GetCategoriesResponse_1.GetCategoriesResponse(result.items.map((value) => new GetCategoryByIdResponse_1.GetCategoryByIdResponse(value)), result.start, result.limit, result.totalItems, result.sort, result.query)));
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
                next(new SuccessResponse_1.SuccessResponse(new GetCategoryByIdResponse_1.GetCategoryByIdResponse(result)));
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
                next(new SuccessResponse_1.SuccessResponse(new UpdateCategoryByIdResponse_1.UpdateCategoryByIdResponse(result)));
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
    getFlashcardsByCategoryId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { limit, start, sort, query } = req.query;
                const userId = (0, RequestUtils_1.getRequestUserId)(req);
                const result = yield this.flashcardService.getByCategoryId(limit, start, sort, query, id, userId);
                next(new SuccessResponse_1.SuccessResponse(new GetFlashcardsResponse_1.GetFlashcardsResponse(result.items.map((value) => new GetFlashcardByIdResponse_1.GetFlashcardByIdResponse(value)), result.start, result.limit, result.totalItems, result.sort, result.query)));
            }
            catch (e) {
                return next(e);
            }
        });
    }
};
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", FlashcardService_1.FlashcardService)
], CategoryController.prototype, "flashcardService", void 0);
CategoryController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [CategoryService_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map