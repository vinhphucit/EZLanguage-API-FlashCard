import * as dotenv from "dotenv";
import path from "path";

let subfix = "";
if (process.env.ENV == "test") {
    subfix = "_test";
}

export class CollectionNames {    
    public static FlashCard = "flash_card" + subfix;    
    public static Category = "category" + subfix;    
}


