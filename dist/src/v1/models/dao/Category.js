"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const EzMongooseConnection_1 = __importDefault(require("../../providers/EzMongooseConnection"));
const CollectionNames_1 = require("./CollectionNames");
exports.CategorySchema = new mongoose_1.Schema({
    title: String,
    description: String,
    userId: String,
    parentCategoryId: String,
    imageUrl: String,
}, {
    timestamps: true,
});
const Category = EzMongooseConnection_1.default.model(CollectionNames_1.CollectionNames.Category, exports.CategorySchema);
exports.default = Category;
//# sourceMappingURL=Category.js.map