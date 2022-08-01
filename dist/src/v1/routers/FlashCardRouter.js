"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardRouter = void 0;
const CommonRouterConfig_1 = require("./CommonRouterConfig");
const typedi_1 = __importDefault(require("typedi"));
const FlashcardController_1 = require("../controllers/FlashcardController");
const Permissions_1 = require("../utils/auth/Permissions");
const AuthorizationMiddleware_1 = require("../middlewares/AuthorizationMiddleware");
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
const CreateFlashcardRequest_1 = require("../models/dto/request/flashcard/CreateFlashcardRequest");
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const UpdateFlashcardRequest_1 = require("../models/dto/request/flashcard/UpdateFlashcardRequest");
class FlashcardRouter extends CommonRouterConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "Flashcard", `flashcards`);
    }
    configureRoutes() {
        const controller = typedi_1.default.get(FlashcardController_1.FlashcardController);
        this.router.all(``, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.all(`/:id`, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.get(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Flashcard.Read), controller.get.bind(controller));
        this.router.post(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Flashcard.Create), (0, ValidationMiddleware_1.ValidationMiddleware)(CreateFlashcardRequest_1.CreateFlashcardRequest), controller.create.bind(controller));
        this.router.get(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Flashcard.ReadById), controller.getById.bind(controller));
        this.router.put(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Flashcard.UpdateById), (0, ValidationMiddleware_1.ValidationMiddleware)(UpdateFlashcardRequest_1.UpdateFlashcardRequest), controller.updateById.bind(controller));
        this.router.delete(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Flashcard.DeleteById), controller.deleteById.bind(controller));
    }
}
exports.FlashcardRouter = FlashcardRouter;
//# sourceMappingURL=FlashcardRouter.js.map