import { Component } from '@angular/core';
import { GLOBAL_RANKING_KEY, GLOBAL_RANKING_NAME } from 'src/app/constants';
import { Player } from 'src/app/models';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-global-ranking',
	templateUrl: './global-ranking.component.html',
	styleUrls: ['./global-ranking.component.scss']
})
export class GlobalRankingComponent {
	players: Player[];
	bestTime: number;
	title: string = GLOBAL_RANKING_NAME;
	
	constructor(private rankingService: RankingService) {
		this.players = this.rankingService.getPlayers();
		this.bestTime = this.players[0].races[GLOBAL_RANKING_KEY].timeInSeconds;
	}
}
