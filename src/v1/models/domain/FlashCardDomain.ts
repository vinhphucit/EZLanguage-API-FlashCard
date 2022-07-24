import { IFlashCard } from "../dao/FlashCard";
import { KeyValueDomain } from "./KeyValueDomain";

export class FlashCardDomain {
  id: string;
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  imageUrls: KeyValueDomain[];
  soundUrls: KeyValueDomain[];
  references: KeyValueDomain[];
  createdAt: Date;
  updatedAt: Date;
  constructor();
  constructor(result: IFlashCard);
  constructor(result?: IFlashCard) {
    if (!result) return;
    this.id = result._id;
    this.title = result.title;
    this.description = result.description;
    this.categoryId = result.categoryId;
    this.userId = result.userId;
    if (result.imageUrls)
      this.imageUrls = result.imageUrls.map((r) => new KeyValueDomain(r));
    if (result.soundUrls)
      this.soundUrls = result.soundUrls.map((r) => new KeyValueDomain(r));
    if (result.references)
      this.references = result.references.map((r) => new KeyValueDomain(r));
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt;
  }
}
