import * as dotenv from "dotenv";
import path from "path";

let subfix = "";
if (process.env.ENV == "test") {
  subfix = "_test";
}

export class CollectionNames {
  public static Flashcard = "flashcard" + subfix;
  public static Category = "category" + subfix;
  public static FlashcardLevel = "flashcard_level" + subfix;
}
