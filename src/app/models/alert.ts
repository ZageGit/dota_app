import { Hero } from "./hero";

export interface Alert{
    id: string;
    name: string;
    description: string;
    time: string;
    hero: Hero;
}