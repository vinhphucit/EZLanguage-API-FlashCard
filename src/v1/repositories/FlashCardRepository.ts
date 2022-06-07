
import { Model } from "mongoose";
import { Service } from "typedi";
import FlashCard, { IFlashCard } from "../models/dao/FlashCard";
import { BaseRepository } from "./BaseRepository";

@Service()
export class FlashCardRepository extends BaseRepository<IFlashCard> {
    setModel(): Model<IFlashCard>{
        return FlashCard;
    }
}