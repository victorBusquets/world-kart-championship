import { TimeUtils } from "../utils";
import { RaceInterface } from "./race.interface";

export class Race {
    name: string;
    time: string;
    timeInSeconds: number;

    constructor(raceData: RaceInterface) {
        this.name = raceData.name;
        this.time = raceData.time; 
        this.timeInSeconds = TimeUtils.getSecondsFromTime(this.time);        
    }
}
