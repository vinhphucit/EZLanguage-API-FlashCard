"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashCardSchema = void 0;
const mongoose_1 = require("mongoose");
const EzMongooseConnection_1 = __importDefault(require("../../providers/EzMongooseConnection"));
const CollectionNames_1 = require("./CollectionNames");
const KeyValue_1 = require("./KeyValue");
exports.FlashCardSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    userId: String,
    categoryId: String,
    imageUrls: [KeyValue_1.KeyValueSchema],
    soundUrls: [KeyValue_1.KeyValueSchema],
    references: [KeyValue_1.KeyValueSchema],
}, {
    timestamps: true,
});
const FlashCard = EzMongooseConnection_1.default.model(CollectionNames_1.CollectionNames.FlashCard, exports.FlashCardSchema);
exports.default = FlashCard;
//# sourceMappingURL=FlashCard.js.map