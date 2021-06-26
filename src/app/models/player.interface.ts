import { RaceInterface } from "./race.interface";

export interface PlayerInterface {
    _id: string;
    picture: string;
    age: number;
    name: string;
    team: string;
    races: RaceInterface[];
}
