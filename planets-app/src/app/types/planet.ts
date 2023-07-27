import { User } from "./user";

export interface Planet {
    _id: string;
    name: string;
    image: string;
    planetType: string;
    overview: string;
    owner: User;
    subscribe: string[];
    __v: number;
}