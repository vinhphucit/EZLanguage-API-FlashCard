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
const CreateFlashCardRequest_1 = require("../models/dto/request/flashCard/CreateFlashCardRequest");
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const UpdateFlashCardRequest_1 = require("../models/dto/request/flashCard/UpdateFlashCardRequest");
class FlashCardRouter extends CommonRouterConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "FlashCard", `flashCards`);
    }
    configureRoutes() {
        const controller = typedi_1.default.get(FlashCardController_1.FlashCardController);
        this.router.all(``, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.all(`/:id`, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.get(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.Read), controller.get.bind(controller));
        this.router.post(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.Create), (0, ValidationMiddleware_1.ValidationMiddleware)(CreateFlashCardRequest_1.CreateFlashCardRequest), controller.create.bind(controller));
        this.router.get(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.ReadById), controller.getById.bind(controller));
        this.router.put(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.UpdateById), (0, ValidationMiddleware_1.ValidationMiddleware)(UpdateFlashCardRequest_1.UpdateFlashCardRequest), controller.updateById.bind(controller));
        this.router.delete(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.FlashCard.DeleteById), controller.deleteById.bind(controller));
    }
}
exports.FlashCardRouter = FlashCardRouter;
//# sourceMappingURL=FlashCardRouter.js.map