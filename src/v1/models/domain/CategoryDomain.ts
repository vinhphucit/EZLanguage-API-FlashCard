import { ICategory } from "../dao/Category";

export class CategoryDomain {
    id: string;
    title: string;
    description: string;
    userId: string;
    parentCategoryId: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    constructor() ;
    constructor(result: ICategory);
    constructor(result?: ICategory) {
        if (!result) return;
        this.id = result._id;         
        this.title = result.title;
        this.description = result.description;
        this.userId = result.userId;
        this.parentCategoryId = result.parentCategoryId;
        this.imageUrl = result.imageUrl;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

}
