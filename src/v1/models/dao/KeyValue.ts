import { Schema } from "mongoose";

export interface KeyValue {
  name: string;
  value: string;
}

export const KeyValueSchema = new Schema<KeyValue>(
  {
    name: String,
    value: String,
  },
  {
    _id: false,
  }
);
