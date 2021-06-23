import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants';
import { Player } from 'src/app/models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
	players: Player[];

	constructor(private router: Router, private playerService: PlayerService) {
		this.players = this.playerService.getPlayers();
	}

	goToPlayerDetail(playerId: string): void {
		this.router.navigate(['/', APP_ROUTES.detail, playerId]);
	}
}
