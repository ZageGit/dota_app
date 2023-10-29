import { Alert } from "../models/alert";

export const mockAlerts: Alert[] = [
    {
        id: '1',
        description: 'desc1',
        name: 'name1',
        time:'time1',
        hero: {
            attack_type: 'ranged',
            id: 123,
            legs: 2,
            localized_name: 'Mock hero localized_name',
            name: 'Mock hero name',
            primary_attr: 'Int',
            roles: ['Mid','Offlane']
        }
    },
    {
        id: '2',
        description: 'desc2',
        name: 'name2',
        time:'time2',
        hero: {
            attack_type: 'ranged',
            id: 123,
            legs: 2,
            localized_name: 'Mock hero localized_name',
            name: 'Mock hero name',
            primary_attr: 'Int',
            roles: ['Mid','Offlane']
        }
    },
    {
        id: '3',
        description: 'desc3',
        name: 'name3',
        time:'time3',
        hero: {
            attack_type: 'ranged',
            id: 123,
            legs: 2,
            localized_name: 'Mock hero localized_name',
            name: 'Mock hero name',
            primary_attr: 'Int',
            roles: ['Mid','Offlane']
        }
    }
]