import { CommonRoutesConfig } from "./CommonRouterConfig";
import express from "express";

import Container from "typedi";
import { CategoryController } from "../controllers/CategoryController";
import { Permissions } from "../utils/auth/Permissions";
import { AuthorizationMiddleware } from "../middlewares/AuthorizationMiddleware";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

export class CategoryRouter extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "Category", `categories`);
  }

  configureRoutes() {
    const controller = Container.get(CategoryController);

    this.router.all(``, AuthenticationMiddleware());
    this.router.all(`/:id`, AuthenticationMiddleware());
    this.router.all(`/:id/flashCards`, AuthenticationMiddleware());
    this.router.get(
      ``,
      AuthorizationMiddleware(Permissions.Category.Read),
      controller.get.bind(controller)
    );
    this.router.post(
      ``,
      AuthorizationMiddleware(Permissions.Category.Create),
      controller.create.bind(controller)
    );
    this.router.get(
      `/:id`,
      AuthorizationMiddleware(Permissions.Category.ReadById),
      controller.getById.bind(controller)
    );
    this.router.put(
      `/:id`,
      AuthorizationMiddleware(Permissions.Category.UpdateById),
      controller.updateById.bind(controller)
    );
    this.router.delete(
      `/:id`,
      AuthorizationMiddleware(Permissions.Category.DeleteById),
      controller.deleteById.bind(controller)
    );
    this.router.get(
      `/:id/flashCards`,
      AuthorizationMiddleware(Permissions.Category.ReadById),
      controller.getFlashCardsByCategoryId.bind(controller)
    );
  }
}
