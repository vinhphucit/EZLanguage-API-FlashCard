"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const CommonRouterConfig_1 = require("./CommonRouterConfig");
const typedi_1 = __importDefault(require("typedi"));
const CategoryController_1 = require("../controllers/CategoryController");
const Permissions_1 = require("../utils/auth/Permissions");
const AuthorizationMiddleware_1 = require("../middlewares/AuthorizationMiddleware");
const AuthenticationMiddleware_1 = require("../middlewares/AuthenticationMiddleware");
class CategoryRouter extends CommonRouterConfig_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "Category", `categories`);
    }
    configureRoutes() {
        const controller = typedi_1.default.get(CategoryController_1.CategoryController);
        this.router.all(``, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.all(`/:id`, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.all(`/:id/flashCards`, (0, AuthenticationMiddleware_1.AuthenticationMiddleware)());
        this.router.get(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.Read), controller.get.bind(controller));
        this.router.post(``, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.Create), controller.create.bind(controller));
        this.router.get(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.ReadById), controller.getById.bind(controller));
        this.router.put(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.UpdateById), controller.updateById.bind(controller));
        this.router.delete(`/:id`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.DeleteById), controller.deleteById.bind(controller));
        this.router.get(`/:id/flashCards`, (0, AuthorizationMiddleware_1.AuthorizationMiddleware)(Permissions_1.Permissions.Category.ReadById), controller.getFlashCardsByCategoryId.bind(controller));
    }
}
exports.CategoryRouter = CategoryRouter;
//# sourceMappingURL=CategoryRouter.js.map