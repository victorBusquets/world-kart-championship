import { TestBed } from '@angular/core/testing';
import { GLOBAL_RANKING_KEY, GLOBAL_RANKING_NAME } from '../constants';
import { Player, PlayerInterface, PlayerRankingHashMap } from '../models';
import { PLAYER_MOCK } from './playerMock';

import { RankingService } from './ranking.service';

describe('RankingService', () => {
  const players: PlayerInterface[] = PLAYER_MOCK;
  let service: RankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getPlayer() with valid ID should return player', () => {
    const playerId: string = players[0]._id;
    const player: Player | undefined = service.getPlayer(playerId);
    expect(player).toBeTruthy();
    expect(player?._id).toEqual(playerId);
  });

  it('method getPlayer() with invalid ID should return undefined', () => {
    const notValidPlayerId: string = 'not-valid-id';
    const player: Player | undefined = service.getPlayer(notValidPlayerId);

    expect(player).toBeFalsy();
    expect(player).toEqual(undefined);
  });

  it('method getPlayers() should return player list order by race', () => {
    const numberOfPlayers: number = players.length;
    const playerListDefault: Player[] = service.getPlayers();
    const playerListAsc: Player[] = service.getPlayers('ASC');
    const playerListDesc: Player[] = service.getPlayers('DESC');

    expect(numberOfPlayers).toEqual(playerListDefault.length);
    expect(numberOfPlayers).toEqual(playerListAsc.length);
    expect(numberOfPlayers).toEqual(playerListDesc.length);

    expect(playerListDefault[0]._id).toEqual(playerListAsc[0]._id);
    expect(playerListAsc[0]._id).toEqual(playerListDesc[playerListDesc.length - 1]._id);
    expect(playerListDesc[0]._id).toEqual(playerListAsc[playerListAsc.length - 1]._id);
  });

  it('method getPlayerRanking() should return player ranking', () => {
    const playerId: string = players[0]._id;
    const playerRankingHashMap: PlayerRankingHashMap = service.getPlayerRanking(playerId);

    expect(playerRankingHashMap).toBeTruthy();
    expect(playerRankingHashMap[GLOBAL_RANKING_KEY].raceKey).toEqual(GLOBAL_RANKING_KEY);
  });

});
