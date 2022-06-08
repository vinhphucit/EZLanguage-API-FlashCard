import { Document, Model, Schema } from "mongoose";
import EzMongooseConnection from "../../providers/EzMongooseConnection";
import { CollectionNames } from "./CollectionNames";

export interface ICategory extends Document {
  title: string;
  description: string;
  parentCategoryId: string;
  userId: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryModel extends Model<ICategory> {}
export const CategorySchema = new Schema<ICategory>(
  {
    title: String,
    description: String,
    userId: String,
    parentCategoryId: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Category: ICategoryModel = EzMongooseConnection.model<
  ICategory,
  ICategoryModel
>(CollectionNames.Category, CategorySchema);

export default Category;
