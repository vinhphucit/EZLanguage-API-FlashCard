import { BadRequestException } from "../../base/exceptions/BadRequestException";
import { NotFoundException } from "../../base/exceptions/NotFoundException";
import { Service } from "typedi";
import { BaseList } from "../models/dao/BaseList";
import { IFlashCard } from "../models/dao/FlashCard";

import { CreateFlashCardRequest } from "../models/dto/request/flashCard/CreateFlashCardRequest";
import { UpdateFlashCardRequest } from "../models/dto/request/flashCard/UpdateFlashCardRequest";
import { FlashCardRepository } from "../repositories/FlashCardRepository";
import { switchNull } from "../utils/StringUtils";

@Service()
export class FlashCardService {
  constructor(private readonly repo: FlashCardRepository) {}

  public async create(
    flashCard: CreateFlashCardRequest
  ): Promise<IFlashCard> {

    let item: Partial<IFlashCard> = {
      title: flashCard.title,
      description: flashCard.description,
    };
    return this.repo.create(item);
  }

  async get(
    limit: string,
    start: string,
    sort: string,
    query: string
  ): Promise<BaseList<IFlashCard>> {
    return await this.repo.get(limit, start, sort, query);
  }

  async getById(id: string): Promise<IFlashCard> {
    const result = await this.repo.getById(id);
    if (!result) throw new NotFoundException(`FlashCard ${id} doesn't exist`);
    return result;
  }
  
  async updateById(
    id: string,
    request: UpdateFlashCardRequest
  ): Promise<IFlashCard | undefined> {
    const entity = await this.getById(id);

    entity.title = switchNull(request.title, entity.title);
    entity.description = switchNull(request.description, entity.description);

    const updateEntity = await this.repo.updateById(id, entity);

    return updateEntity;
  }

  async deleteById(id: string): Promise<IFlashCard> {
    await this.getById(id);
    return this.repo.removeById(id);
  }
}
