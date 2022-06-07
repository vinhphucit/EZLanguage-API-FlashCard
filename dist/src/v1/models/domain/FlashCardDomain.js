"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashCardDomain = void 0;
class FlashCardDomain {
    constructor(result) {
        if (!result)
            return;
        this.id = result._id;
        this.title = result.title;
        this.description = result.description;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }
}
exports.FlashCardDomain = FlashCardDomain;
//# sourceMappingURL=FlashCardDomain.js.map