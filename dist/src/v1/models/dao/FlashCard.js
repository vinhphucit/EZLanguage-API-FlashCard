"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashCardSchema = exports.KeyValueSchema = void 0;
const mongoose_1 = require("mongoose");
const EzMongooseConnection_1 = __importDefault(require("../../providers/EzMongooseConnection"));
const CollectionNames_1 = require("./CollectionNames");
exports.KeyValueSchema = new mongoose_1.Schema({
    name: String,
    value: String,
}, {
    _id: false,
});
exports.FlashCardSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    userId: String,
    imageUrls: [exports.KeyValueSchema],
    soundUrls: [exports.KeyValueSchema],
    references: [exports.KeyValueSchema],
}, {
    timestamps: true,
});
const FlashCard = EzMongooseConnection_1.default.model(CollectionNames_1.CollectionNames.FlashCard, exports.FlashCardSchema);
exports.default = FlashCard;
//# sourceMappingURL=FlashCard.js.map