import { CommonRoutesConfig } from "./CommonRouterConfig";
import express from "express";

import Container from "typedi";
import { FlashCardController } from "../controllers/FlashCardController";
import { Permissions } from "../utils/auth/Permissions";
import { AuthorizationMiddleware } from "../middlewares/AuthorizationMiddleware";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

export class FlashCardRouter extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "flashCard", `flashCards/`);
  }

  configureRoutes() {
    const controller = Container.get(FlashCardController);

    this.router.all(``, AuthenticationMiddleware());
    this.router.get(
      ``,
      AuthorizationMiddleware(Permissions.FlashCard.Read),
      controller.get.bind(controller)
    );
  }
}
