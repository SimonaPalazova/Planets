import { User } from "./user-id";

export interface Moon {
    _id: string;
    name: string;
    image: string;
    overview: string;
    owner: User;
    like: string[];
    __v: number;
}