import { IFlashCard } from "../dao/FlashCard";

export class FlashCardDomain {
    id: string;
    title: string;
    description: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    constructor() ;
    constructor(result: IFlashCard);
    constructor(result?: IFlashCard) {
        if (!result) return;
        this.id = result._id;         
        this.title = result.title;
        this.description = result.description;
        this.userId = result.userId;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

}
