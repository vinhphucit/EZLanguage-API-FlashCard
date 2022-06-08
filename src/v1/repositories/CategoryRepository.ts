
import { Model } from "mongoose";
import { Service } from "typedi";
import Category, { ICategory } from "../models/dao/Category";
import { BaseRepository } from "./BaseRepository";

@Service()
export class CategoryRepository extends BaseRepository<ICategory> {
    setModel(): Model<ICategory>{
        return Category;
    }
}