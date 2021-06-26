import { Injectable } from "@angular/core";
import { GLOBAL_RANKING_KEY } from "../constants";
import { Player, PlayerInterface, PlayerRanking, PlayerRankingHashMap, RaceInfo } from "../models";
import { PLAYER_MOCK } from "./playerMock";

@Injectable({
    providedIn: 'root'
})
export class RankingService {
    private players: Player[];
    private raceList: RaceInfo[] = [];

    constructor() {
        this.players = PLAYER_MOCK.map((player: PlayerInterface)=> new Player(player));
        this.raceList = this.getRaceListNames();
    }

    getRaceList(): RaceInfo[] {
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

    getPlayerRanking(playerId: string): PlayerRankingHashMap {
        const playerRankingHashMap: PlayerRankingHashMap = {};

        this.raceList.forEach((race: RaceInfo)=>{
            const players: Player[] = this.getPlayers('ASC', race.key);

            playerRankingHashMap[race.key] = {
                raceKey: race.key, 
                bestTimeInSeconds: players[0].races[race.key].timeInSeconds,
                ranking: players.findIndex((player: Player)=>player._id === playerId) + 1
            };
        });

        return playerRankingHashMap;
    }

    private getRaceListNames(): RaceInfo[]{
        const races: RaceInfo[] = [];
        
        this.players.forEach((player: Player)=>{
            return Object.keys(player.races).map((raceKey: string) => {
                const raceIndex: number = races.findIndex((race: RaceInfo)=> race.key === raceKey);

                if(raceIndex === -1) {
                    races.push({name: player.races[raceKey].name, key: raceKey});
                }
            });
        });

        return races.sort(this.sortRaces);
    }

    private sortRaces(raceA: RaceInfo, raceB: RaceInfo) {
        if ( raceA.key < raceB.key ){
            return -1;
        }
        if ( raceA.key > raceB.key){
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