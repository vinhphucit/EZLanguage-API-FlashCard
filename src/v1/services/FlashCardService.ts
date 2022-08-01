import { BadRequestException } from "../../base/exceptions/BadRequestException";
import { NotFoundException } from "../../base/exceptions/NotFoundException";
import { Service } from "typedi";
import { BaseList } from "../models/dao/BaseList";
import { IFlashcard } from "../models/dao/Flashcard";

import { CreateFlashcardRequest as CreateFlashcardRequest } from "../models/dto/request/flashcard/CreateFlashcardRequest";
import { UpdateFlashcardRequest } from "../models/dto/request/flashcard/UpdateFlashcardRequest";
import { FlashcardRepository } from "../repositories/FlashcardRepository";
import { switchNull } from "../utils/StringUtils";
import { KeyValue } from "../models/dao/KeyValue";

@Service()
export class FlashcardService {
  constructor(private readonly repo: FlashcardRepository) {}

  public async create(
    flashcard: CreateFlashcardRequest,
    userId?: string
  ): Promise<IFlashcard> {
    let item: Partial<IFlashcard> = {
      title: flashcard.title,
      description: flashcard.description,
      categoryId: flashcard.categoryId,
      imageUrls: flashcard.imageUrls?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      soundUrls: flashcard.soundUrls?.map((i) => {
        const m: KeyValue = { name: i.key, value: i.value };
        return m;
      }),
      references: flashcard.references?.map((i) => {
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
  ): Promise<BaseList<IFlashcard>> {
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
  ): Promise<BaseList<IFlashcard>> {
    return await this.repo.get(limit, start, sort, query, [
      `categoryId%eq%${categoryId}`,
      userId ? `userId%eq%${userId}` : null,
    ]);
  }

  async getById(id: string, userId?: string): Promise<IFlashcard> {
    const result = await this.repo.getById(id);
    if (!result) throw new NotFoundException(`Flashcard ${id} doesn't exist`);
    if (userId && result.userId != userId) throw new NotFoundException();
    return result;
  }

  async updateById(
    id: string,
    request: UpdateFlashcardRequest,
    userId?: string
  ): Promise<IFlashcard | undefined> {
    const entity = await this.getById(id, userId);

    entity.title = switchNull(request.title, entity.title);
    entity.description = switchNull(request.description, entity.description);
    entity.masteredLevel = switchNull(request.masteredLevel, entity.masteredLevel);
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

  async deleteById(id: string, userId?: string): Promise<IFlashcard> {
    await this.getById(id, userId);
    return this.repo.removeById(id);
  }
}
