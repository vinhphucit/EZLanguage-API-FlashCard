import { Document, Model, Schema } from "mongoose";
import EzMongooseConnection from "../../providers/EzMongooseConnection";
import { ICategory } from "./Category";
import { CollectionNames } from "./CollectionNames";
import { KeyValue, KeyValueSchema } from "./KeyValue";

export interface IFlashCard extends Document {
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  imageUrls: KeyValue[];
  soundUrls: KeyValue[];
  references: KeyValue[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IFlashCardModel extends Model<IFlashCard> {}

export const FlashCardSchema = new Schema<IFlashCard>(
  {
    title: String,
    description: String,
    userId: String,
    categoryId: String,
    imageUrls: [KeyValueSchema],
    soundUrls: [KeyValueSchema],
    references: [KeyValueSchema],
  },
  {
    timestamps: true,
  }
);

const FlashCard: IFlashCardModel = EzMongooseConnection.model<
  IFlashCard,
  IFlashCardModel
>(CollectionNames.FlashCard, FlashCardSchema);

export default FlashCard;
