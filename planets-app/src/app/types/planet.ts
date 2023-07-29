import { UserId } from "./user-id";

export interface PlanetId {
    _id: string;
    name: string;
    image: string;
    planetType: string;
    overview: string;
    owner: UserId;
    subscribe: string[];
    __v: number;
}