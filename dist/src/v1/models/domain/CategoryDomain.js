"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDomain = void 0;
class CategoryDomain {
    constructor(result) {
        if (!result)
            return;
        this.id = result._id;
        this.title = result.title;
        this.description = result.description;
        this.userId = result.userId;
        this.parentCategoryId = result.parentCategoryId;
        this.imageUrl = result.imageUrl;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }
}
exports.CategoryDomain = CategoryDomain;
//# sourceMappingURL=CategoryDomain.js.map