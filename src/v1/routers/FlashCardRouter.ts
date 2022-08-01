import { CommonRoutesConfig } from "./CommonRouterConfig";
import express from "express";

import Container from "typedi";
import { FlashcardController } from "../controllers/FlashcardController";
import { Permissions } from "../utils/auth/Permissions";
import { AuthorizationMiddleware } from "../middlewares/AuthorizationMiddleware";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";
import { CreateFlashcardRequest } from "../models/dto/request/flashcard/CreateFlashcardRequest";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { UpdateFlashcardRequest } from "../models/dto/request/flashcard/UpdateFlashcardRequest";

export class FlashcardRouter extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "Flashcard", `flashcards`);
  }

  configureRoutes() {
    const controller = Container.get(FlashcardController);

    this.router.all(``, AuthenticationMiddleware());
    this.router.all(`/:id`, AuthenticationMiddleware());
    this.router.get(
      ``,
      AuthorizationMiddleware(Permissions.Flashcard.Read),
      controller.get.bind(controller)
    );
    this.router.post(
      ``,
      AuthorizationMiddleware(Permissions.Flashcard.Create),
      ValidationMiddleware(CreateFlashcardRequest),
      controller.create.bind(controller)
    );
    this.router.get(
      `/:id`,
      AuthorizationMiddleware(Permissions.Flashcard.ReadById),
      controller.getById.bind(controller)
    );
    this.router.put(
      `/:id`,
      AuthorizationMiddleware(Permissions.Flashcard.UpdateById),
      ValidationMiddleware(UpdateFlashcardRequest),
      controller.updateById.bind(controller)
    );
    this.router.delete(
      `/:id`,
      AuthorizationMiddleware(Permissions.Flashcard.DeleteById),
      controller.deleteById.bind(controller)
    );
  }
}
