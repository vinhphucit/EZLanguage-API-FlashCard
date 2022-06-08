import { BadRequestException } from "../../base/exceptions/BadRequestException";
import { NotFoundException } from "../../base/exceptions/NotFoundException";
import { Service } from "typedi";
import { BaseList } from "../models/dao/BaseList";
import { ICategory } from "../models/dao/Category";

import { CreateCategoryRequest } from "../models/dto/request/category/CreateCategoryRequest";
import { UpdateCategoryRequest } from "../models/dto/request/category/UpdateCategoryRequest";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { switchNull } from "../utils/StringUtils";

@Service()
export class CategoryService {
  constructor(private readonly repo: CategoryRepository) {}

  public async create(
    category: CreateCategoryRequest,
    userId?: string
  ): Promise<ICategory> {
    let item: Partial<ICategory> = {
      title: category.title,
      description: category.description,
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
  ): Promise<BaseList<ICategory>> {
    return await this.repo.get(
      limit,
      start,
      sort,
      query,
      userId ? [`userId%eq%${userId}`] : null
    );
  }

  async getById(id: string, userId?: string): Promise<ICategory> {
    const result = await this.repo.getById(id);
    if (!result) throw new NotFoundException(`Category ${id} doesn't exist`);
    if (userId && result.userId != userId) throw new NotFoundException();
    return result;
  }

  async updateById(
    id: string,
    request: UpdateCategoryRequest,
    userId?: string
  ): Promise<ICategory | undefined> {
    const entity = await this.getById(id, userId);

    entity.title = switchNull(request.title, entity.title);
    entity.description = switchNull(request.description, entity.description);

    const updateEntity = await this.repo.updateById(id, entity);

    return updateEntity;
  }

  async deleteById(id: string, userId?: string): Promise<ICategory> {
    await this.getById(id, userId);
    return this.repo.removeById(id);
  }
}
