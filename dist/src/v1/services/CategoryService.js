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
exports.CategoryService = void 0;
const NotFoundException_1 = require("../../base/exceptions/NotFoundException");
const typedi_1 = require("typedi");
const CategoryRepository_1 = require("../repositories/CategoryRepository");
const StringUtils_1 = require("../utils/StringUtils");
let CategoryService = class CategoryService {
    constructor(repo) {
        this.repo = repo;
    }
    create(category, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = {
                title: category.title,
                description: category.description,
                userId: userId,
            };
            return this.repo.create(item);
        });
    }
    get(limit, start, sort, query, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.get(limit, start, sort, query, userId ? [`userId%eq%${userId}`] : null);
        });
    }
    getById(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repo.getById(id);
            if (!result)
                throw new NotFoundException_1.NotFoundException(`Category ${id} doesn't exist`);
            if (userId && result.userId != userId)
                throw new NotFoundException_1.NotFoundException();
            return result;
        });
    }
    updateById(id, request, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.getById(id, userId);
            entity.title = (0, StringUtils_1.switchNull)(request.title, entity.title);
            entity.description = (0, StringUtils_1.switchNull)(request.description, entity.description);
            const updateEntity = yield this.repo.updateById(id, entity);
            return updateEntity;
        });
    }
    deleteById(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(id, userId);
            return this.repo.removeById(id);
        });
    }
};
CategoryService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [CategoryRepository_1.CategoryRepository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=CategoryService.js.map