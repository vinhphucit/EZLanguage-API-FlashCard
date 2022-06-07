import { Document, Model, Schema } from "mongoose";
import EzMongooseConnection from "../../providers/EzMongooseConnection";
import { CollectionNames } from "./CollectionNames";

export interface IFlashCard extends Document {
  title: string;
  description: string;
  imageUrls: KeyValue[];
  soundUrls: KeyValue[];
  references: KeyValue[];
  createdAt: Date;
  updatedAt: Date;
}
export interface KeyValue {
  name: string;
  value: string;
}
export interface IFlashCardModel extends Model<IFlashCard> {}
export const KeyValueSchema = new Schema<KeyValue>(
  {
    name: String,
    value: String,
  },
  {
    _id: false,
  }
);
export const FlashCardSchema = new Schema<IFlashCard>(
  {
    title: String,
    description: String,
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
