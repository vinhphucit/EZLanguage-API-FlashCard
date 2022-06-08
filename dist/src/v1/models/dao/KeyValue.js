"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueSchema = void 0;
const mongoose_1 = require("mongoose");
exports.KeyValueSchema = new mongoose_1.Schema({
    name: String,
    value: String,
}, {
    _id: false,
});
//# sourceMappingURL=KeyValue.js.map