import { PlayerInterface } from "./player.interface";
import { RaceInterface } from "./race.interface";
import { Race } from "./race.class";
import { StringUtils, TimeUtils } from "../utils";
import { GLOBAL_RANKING_KEY, GLOBAL_RANKING_NAME } from "../constants";
import { RaceHashMap } from ".";
export class Player {
    _id: string;
    picture: string;
    age: number;
    name: string;
    team: string;
    races: RaceHashMap = {};

    constructor(playerData: PlayerInterface) {
        this._id = playerData._id;
        this.picture = playerData.picture;
        this.age = playerData.age;
        this.name = playerData.name;
        this.team = playerData.team;

        this.prepareRacesData(playerData.races);
    }

    getRaceInfo(raceName: string): Race {
        return this.races[raceName];
    }


    private prepareRacesData(racesData: RaceInterface[]): void {       
        let totalTimeInSeconds: number = 0;
        
        racesData.forEach((raceData: RaceInterface) =>{
            const race: Race = new Race(raceData);
            const raceKey: string = StringUtils.getHashMapKeyFormatted(race.name);

            this.races[raceKey] = race;
            totalTimeInSeconds += race.timeInSeconds;

            return race;
        });

        this.generateGlobalInfo(totalTimeInSeconds);
    }

    private generateGlobalInfo(totalTimeInSeconds: number): void{
        const totalTime: string = TimeUtils.getTimeFromSeconds(totalTimeInSeconds);

        const globalRanking: Race = new Race({
            name: GLOBAL_RANKING_NAME,
            time: totalTime
        });

        this.races[GLOBAL_RANKING_KEY] = globalRanking;        
    }
}

