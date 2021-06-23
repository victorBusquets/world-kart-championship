import { Injectable } from "@angular/core";
import { Player, Race } from "../models";
import { TimeUtils } from "../utils/time.utils";
import { PLAYER_MOCK } from "./playerMock";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private players: Player[];

    constructor() {
        this.players = this.prepareData(PLAYER_MOCK);
    }

    getPlayers(order: 'ASC' | 'DESC' = 'ASC'): Player[] {
        return this.players.sort((playerA: Player, playerB: Player)=>{
            return order === 'ASC' ? 
                this.sortPlayers(playerA, playerB) :
                this.sortPlayers(playerB, playerA)
        });
    }

    getPlayer(playerId: string): Player | undefined {
        return this.players.find((player: Player)=> player._id === playerId);
    }

    private sortPlayers(playerA: Player, playerB: Player): number {
        if (!playerA.totalTime || !playerB.totalTime){
            return 0;
        }
        if ( playerA.totalTime < playerB.totalTime ){
            return -1;
        }
        if ( playerA.totalTime > playerB.totalTime){
            return 1;
        }
        return 0;
    }

    private prepareData(players: Player[]): Player[] {
        return players.map((player: Player) => {
            let totalTime: number = 0;

            player.races = player.races.map((race: Race)=>{
               const timeInSeconds: number = TimeUtils.getSecondsFromTime(race.time);
               race.timeInSeconds = timeInSeconds;
               totalTime += timeInSeconds;

               return race;
            });
            
            player.totalTime = totalTime;

            return player;
        });
    }
}