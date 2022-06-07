"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashCardRouter = void 0;
const CommonRouterConfig_1 = require("./CommonRouterConfig");
const typedi_1 = __importDefault(require("typedi"));
const FlashCardController_1 = require("../controllers/FlashCardController");
const Permissions_1 = require("../utils/auth/Permissions");
const AuthorizationMiddleware_1 = require("../middlewares/AuthorizationMiddleware");
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
class FlashCardRouter extends CommonRouterConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "flashCard", `flashCards/`);
    }
    configureRoutes() {
        const controller = typedi_1.default.get(FlashCardController_1.FlashCardController);
        this.router.all(``, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.get(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.Read), controller.get.bind(controller));
    }
}
exports.FlashCardRouter = FlashCardRouter;
//# sourceMappingURL=FlashCardRouter.js.map