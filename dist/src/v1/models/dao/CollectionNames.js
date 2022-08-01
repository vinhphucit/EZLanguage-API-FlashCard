"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionNames = void 0;
let subfix = "";
if (process.env.ENV == "test") {
    subfix = "_test";
}
class CollectionNames {
}
exports.CollectionNames = CollectionNames;
CollectionNames.Flashcard = "flashcard" + subfix;
CollectionNames.Category = "category" + subfix;
CollectionNames.FlashcardLevel = "flashcard_level" + subfix;
//# sourceMappingURL=CollectionNames.js.map