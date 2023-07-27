import { User } from "./user";

export interface Moon {
    _id: string;
    name: string;
    image: string;
    overview: string;
    owner: User;
    like: string[];
    __v: number;
}