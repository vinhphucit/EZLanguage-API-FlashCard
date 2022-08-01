import { BadRequestException } from "../../base/exceptions/BadRequestException";
import { NotFoundException } from "../../base/exceptions/NotFoundException";
import { Service } from "typedi";
import { BaseList } from "../models/dao/BaseList";
import { IFlashCard } from "../models/dao/FlashCard";

import { CreateFlashCardRequest } from "../models/dto/request/flashCard/CreateFlashCardRequest";
import { UpdateFlashCardRequest } from "../models/dto/request/flashCard/UpdateFlashCardRequest";
import { FlashCardRepository } from "../repositories/FlashCardRepository";
import { switchNull } from "../utils/StringUtils";
import { KeyValue } from "../models/dao/KeyValue";

@Service()
export class FlashCardService {
  constructor(private readonly repo: FlashCardRepository) {}

  public async create(
    flashCard: CreateFlashCardRequest,
    userId?: string
  ): Promise<IFlashCard> {
    let item: Partial<IFlashCard> = {
      title: flashCard.title,
      description: flashCard.description,
      categoryId: flashCard.categoryId,
      imageUrls: flashCard.imageUrls?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      soundUrls: flashCard.soundUrls?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      references: flashCard.references?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      userId: userId,
    };
    return this.repo.create(item);
  }

  async get(
    limit: string,
    start: string,
    sort: string,
    query: string,
    userId?: string
  ): Promise<BaseList<IFlashCard>> {
    return await this.repo.get(
      limit,
      start,
      sort,
      query,
      userId ? [`userId%eq%${userId}`] : null
    );
  }
  async getByCategoryId(
    limit: string,
    start: string,
    sort: string,
    query: string,
    categoryId: string,
    userId?: string
  ): Promise<BaseList<IFlashCard>> {
    return await this.repo.get(limit, start, sort, query, [
      `categoryId%eq%${categoryId}`,
      userId ? `userId%eq%${userId}` : null,
    ]);
  }

  async getById(id: string, userId?: string): Promise<IFlashCard> {
    const result = await this.repo.getById(id);
    if (!result) throw new NotFoundException(`FlashCard ${id} doesn't exist`);
    if (userId && result.userId != userId) throw new NotFoundException();
    return result;
  }

  async updateById(
    id: string,
    request: UpdateFlashCardRequest,
    userId?: string
  ): Promise<IFlashCard | undefined> {
    const entity = await this.getById(id, userId);

    entity.title = switchNull(request.title, entity.title);
    entity.description = switchNull(request.description, entity.description);
    entity.imageUrls = switchNull(
      request.imageUrls?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      entity.imageUrls
    );
    entity.soundUrls = switchNull(request.soundUrls?.map((i) => {
      const m: KeyValue = { name: i.key, value: i.value };
      return m;
    }), entity.soundUrls);
    entity.references = switchNull(request.references?.map((i) => {
      const m: KeyValue = { name: i.key, value: i.value };
      return m;
    }), entity.references);

    const updateEntity = await this.repo.updateById(id, entity);

    return updateEntity;
  }

  async deleteById(id: string, userId?: string): Promise<IFlashCard> {
    await this.getById(id, userId);
    return this.repo.removeById(id);
  }
}
