import { UserId } from "./user-id";

export interface MoonId {
    _id: string;
    name: string;
    image: string;
    overview: string;
    owner: UserId;
    like: string[];
    __v: number;
}