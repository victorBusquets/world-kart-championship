import { Injectable } from "@angular/core";
import { Player, Race } from "../models";
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
               const timeInSeconds: number = this.getTimeSeconds(race.time);
               race.timeInSeconds = timeInSeconds;
               totalTime += timeInSeconds;

               return race;
            });
            
            player.totalTime = totalTime;

            return player;
        });
    }

    private getTimeSeconds(time: string): number{
        const timeFragments: string[] = time.split(':');
        const hours: number = +timeFragments[0];
        const minutes: number = +timeFragments[1];
        const seconds: number = +timeFragments[2];
        
        return (hours * 60 * 60) + (minutes * 60) + seconds;
    }
}