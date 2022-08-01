import { Document, Model, Schema } from "mongoose";
import EzMongooseConnection from "../../providers/EzMongooseConnection";
import { ICategory } from "./Category";
import { CollectionNames } from "./CollectionNames";
import { KeyValue, KeyValueSchema } from "./KeyValue";

export interface IFlashcard extends Document {
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  imageUrls: KeyValue[];
  soundUrls: KeyValue[];
  references: KeyValue[];
  masteredLevel: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFlashcardModel extends Model<IFlashcard> {}

export const FlashcardSchema = new Schema<IFlashcard>(
  {
    title: String,
    description: String,
    userId: String,
    categoryId: String,
    masteredLevel: {
      type: "Number",
      default: 0
    },
    imageUrls: [KeyValueSchema],
    soundUrls: [KeyValueSchema],
    references: [KeyValueSchema],
  },
  {
    timestamps: true,
  }
);

const Flashcard: IFlashcardModel = EzMongooseConnection.model<
  IFlashcard,
  IFlashcardModel
>(CollectionNames.Flashcard, FlashcardSchema);

export default Flashcard;
