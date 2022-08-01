
import { Model } from "mongoose";
import { Service } from "typedi";
import Flashcard, { IFlashcard } from "../models/dao/Flashcard";
import { BaseRepository } from "./BaseRepository";

@Service()
export class FlashcardRepository extends BaseRepository<IFlashcard> {
    setModel(): Model<IFlashcard>{
        return Flashcard;
    }
}