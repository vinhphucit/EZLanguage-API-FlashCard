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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlashcardRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const IsNotEmptyString_1 = require("../../../../utils/validation/IsNotEmptyString");
const KeyValueRequest_1 = require("./KeyValueRequest");
class UpdateFlashcardRequest {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, IsNotEmptyString_1.IsNotEmptyString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFlashcardRequest.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, IsNotEmptyString_1.IsNotEmptyString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFlashcardRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateFlashcardRequest.prototype, "masteredLevel", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => KeyValueRequest_1.KeyValueRequest),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateFlashcardRequest.prototype, "imageUrls", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => KeyValueRequest_1.KeyValueRequest),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateFlashcardRequest.prototype, "soundUrls", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => KeyValueRequest_1.KeyValueRequest),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateFlashcardRequest.prototype, "references", void 0);
exports.UpdateFlashcardRequest = UpdateFlashcardRequest;
//# sourceMappingURL=UpdateFlashcardRequest.js.map