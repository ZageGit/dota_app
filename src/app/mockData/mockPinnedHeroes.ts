import { Hero } from "../models/hero";

export const mockPinnedHeroes:Hero[] = [
    {
        attack_type: 'ranged',
        id: 123,
        legs: 2,
        localized_name: 'Mock hero localized_name',
        name: 'Mock hero name',
        primary_attr: 'Int',
        roles: ['Mid','Offlane']
    },
    {
        attack_type: 'melee',
        id: 1234,
        legs: 4,
        localized_name: 'Mock hero localized_name 2',
        name: 'Mock hero name 2',
        primary_attr: 'Str',
        roles: ['Mid','Offlane']
    }
]