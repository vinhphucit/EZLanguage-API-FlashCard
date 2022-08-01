import { CommonRoutesConfig } from "./CommonRouterConfig";
import express from "express";

import Container from "typedi";
import { FlashCardController } from "../controllers/FlashCardController";
import { Permissions } from "../utils/auth/Permissions";
import { AuthorizationMiddleware } from "../middlewares/AuthorizationMiddleware";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";
import { CreateFlashCardRequest } from "../models/dto/request/flashCard/CreateFlashCardRequest";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { UpdateFlashCardRequest } from "../models/dto/request/flashCard/UpdateFlashCardRequest";

export class FlashCardRouter extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "FlashCard", `flashCards`);
  }

  configureRoutes() {
    const controller = Container.get(FlashCardController);

    this.router.all(``, AuthenticationMiddleware());
    this.router.all(`/:id`, AuthenticationMiddleware());
    this.router.get(
      ``,
      AuthorizationMiddleware(Permissions.FlashCard.Read),
      controller.get.bind(controller)
    );
    this.router.post(
      ``,
      AuthorizationMiddleware(Permissions.FlashCard.Create),
      ValidationMiddleware(CreateFlashCardRequest),
      controller.create.bind(controller)
    );
    this.router.get(
      `/:id`,
      AuthorizationMiddleware(Permissions.FlashCard.ReadById),
      controller.getById.bind(controller)
    );
    this.router.put(
      `/:id`,
      AuthorizationMiddleware(Permissions.FlashCard.UpdateById),
      ValidationMiddleware(UpdateFlashCardRequest),
      controller.updateById.bind(controller)
    );
    this.router.delete(
      `/:id`,
      AuthorizationMiddleware(Permissions.FlashCard.DeleteById),
      controller.deleteById.bind(controller)
    );
  }
}
