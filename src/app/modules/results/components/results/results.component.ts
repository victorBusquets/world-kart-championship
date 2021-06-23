import { Component } from '@angular/core';
import { Player } from 'src/app/models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
	players: Player[];
	bestTime: number;

	constructor(private playerService: PlayerService) {
		this.players = this.playerService.getPlayers();
		this.bestTime = this.players[0].totalTime || 0;
	}
}
