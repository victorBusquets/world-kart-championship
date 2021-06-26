import { Injectable } from "@angular/core";
import { GLOBAL_RANKING_KEY } from "../constants";
import { Player, PlayerInterface } from "../models";
import { PLAYER_MOCK } from "./playerMock";

@Injectable({
    providedIn: 'root'
})
export class RankingService {
    private players: Player[];
    private raceList: {raceName: string, raceKey: string}[] = [];

    constructor() {
        this.players = PLAYER_MOCK.map((player: PlayerInterface)=> new Player(player));
        this.raceList = this.getRaceListNames();
    }

    getRaceList(): {raceName: string, raceKey: string}[] {
        return this.raceList;        
    }

    getPlayers(order: 'ASC' | 'DESC' = 'ASC', raceKey: string = GLOBAL_RANKING_KEY): Player[] {
        const players: Player[] = this.players.map((player: Player) => Object.assign({}, player));

        return players.sort((playerA: Player, playerB: Player)=>{
            return order === 'ASC' ? 
                this.sortPlayers(playerA, playerB, raceKey) :
                this.sortPlayers(playerB, playerA, raceKey)
        });
    }

    getPlayer(playerId: string): Player | undefined {
        return this.players.find((player: Player)=> player._id === playerId);
    }

    private getRaceListNames(): {raceName: string, raceKey: string}[]{
        const races: {raceName: string, raceKey: string}[] = [];
        
        this.players.forEach((player: Player)=>{
            return Object.keys(player.races).map((raceKey: string) => {
                const raceIndex: number = races.findIndex((race: {raceName: string, raceKey: string})=> race.raceKey === raceKey);

                if(raceIndex === -1) {
                    races.push({raceName: player.races[raceKey].name, raceKey: raceKey});
                }
            });
        });

        return races.sort(this.sortRaces);
    }

    private sortRaces(raceA: {raceName: string, raceKey: string}, raceB: {raceName: string, raceKey: string}) {
        if ( raceA.raceKey < raceB.raceKey ){
            return -1;
        }
        if ( raceA.raceKey > raceB.raceKey){
            return 1;
        }
        return 0;
    }

    private sortPlayers(playerA: Player, playerB: Player, raceKey: string): number {
        const playerARaceTime: number = playerA.races[raceKey].timeInSeconds;
        const playerBRaceTime: number = playerB.races[raceKey].timeInSeconds;

        if ( playerARaceTime < playerBRaceTime ){
            return -1;
        }
        if ( playerARaceTime > playerBRaceTime){
            return 1;
        }
        return 0;
    }

}