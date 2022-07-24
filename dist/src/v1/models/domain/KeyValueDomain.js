"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueDomain = void 0;
class KeyValueDomain {
    constructor(result) {
        if (!result)
            return;
        this.key = result.name;
        this.value = result.value;
    }
}
exports.KeyValueDomain = KeyValueDomain;
//# sourceMappingURL=KeyValueDomain.js.map