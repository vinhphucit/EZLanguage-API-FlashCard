"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardDomain = void 0;
const KeyValueDomain_1 = require("./KeyValueDomain");
class FlashcardDomain {
    constructor(result) {
        if (!result)
            return;
        this.id = result._id;
        this.title = result.title;
        this.description = result.description;
        this.categoryId = result.categoryId;
        this.userId = result.userId;
        if (result.imageUrls)
            this.imageUrls = result.imageUrls.map((r) => new KeyValueDomain_1.KeyValueDomain(r));
        if (result.soundUrls)
            this.soundUrls = result.soundUrls.map((r) => new KeyValueDomain_1.KeyValueDomain(r));
        if (result.references)
            this.references = result.references.map((r) => new KeyValueDomain_1.KeyValueDomain(r));
        this.masteredLevel = result.masteredLevel;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }
}
exports.FlashcardDomain = FlashcardDomain;
//# sourceMappingURL=FlashcardDomain.js.map