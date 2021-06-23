import { Race } from "./race.interface";

export interface Player {
    _id: string;
    picture: string;
    age: number;
    name: string;
    team: string;
    races: Race[];
    totalTime?: number;
}

