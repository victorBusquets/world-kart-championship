import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES, GLOBAL_RANKING_KEY } from 'src/app/constants';
import { Player } from 'src/app/models';

@Component({
	selector: 'app-global-ranking-player',
	templateUrl: './global-ranking-player.component.html',
	styleUrls: ['./global-ranking-player.component.scss']
})
export class GlobalRankingPlayerComponent implements OnInit {
	@Input() player!: Player;
	@Input() ranking!: number;
	@Input() bestTime!: number;
	playerTimeInSeconds: number = 0;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.playerTimeInSeconds = this.player.races[GLOBAL_RANKING_KEY].timeInSeconds;
	}
	
	goToPlayerDetail(playerId: string): void {
		this.router.navigate(['/', APP_ROUTES.detail, playerId]);
	}

}
