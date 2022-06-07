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
exports.FlashCardService = void 0;
const NotFoundException_1 = require("../../base/exceptions/NotFoundException");
const typedi_1 = require("typedi");
const FlashCardRepository_1 = require("../repositories/FlashCardRepository");
const StringUtils_1 = require("../utils/StringUtils");
let FlashCardService = class FlashCardService {
    constructor(repo) {
        this.repo = repo;
    }
    create(flashCard) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = {
                title: flashCard.title,
                description: flashCard.description,
            };
            return this.repo.create(item);
        });
    }
    get(limit, start, sort, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.get(limit, start, sort, query);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repo.getById(id);
            if (!result)
                throw new NotFoundException_1.NotFoundException(`FlashCard ${id} doesn't exist`);
            return result;
        });
    }
    updateById(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.getById(id);
            entity.title = (0, StringUtils_1.switchNull)(request.title, entity.title);
            entity.description = (0, StringUtils_1.switchNull)(request.description, entity.description);
            const updateEntity = yield this.repo.updateById(id, entity);
            return updateEntity;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(id);
            return this.repo.removeById(id);
        });
    }
};
FlashCardService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [FlashCardRepository_1.FlashCardRepository])
], FlashCardService);
exports.FlashCardService = FlashCardService;
//# sourceMappingURL=FlashCardService.js.map