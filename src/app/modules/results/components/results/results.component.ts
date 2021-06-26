import { Component } from '@angular/core';
import { Player } from 'src/app/models';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
	// players: Player[];
	// bestTime: number;

	constructor(private rankingService: RankingService) {
		// this.players = this.playerService.getPlayers();
		// this.bestTime = this.players[0].totalTimeInSeconds;
	}
}
