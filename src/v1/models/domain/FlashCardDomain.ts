import { IFlashcard } from "../dao/Flashcard";
import { KeyValueDomain } from "./KeyValueDomain";

export class FlashcardDomain {
  id: string;
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  imageUrls: KeyValueDomain[];
  soundUrls: KeyValueDomain[];
  references: KeyValueDomain[];
  masteredLevel: number;
  createdAt: Date;
  updatedAt: Date;
  constructor();
  constructor(result: Partial<IFlashcard>);
  constructor(result: IFlashcard);
  constructor(result?: IFlashcard) {
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
    this.masteredLevel = result.masteredLevel;
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt;
  }
}
