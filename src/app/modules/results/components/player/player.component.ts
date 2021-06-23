import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants';
import { Player } from 'src/app/models';
import { TimeUtils } from 'src/app/utils/time.utils';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
	@Input() player!: Player;
	@Input() ranking!: number;
	@Input() bestTime!: number;
	formattedTime: string = '';
	timeDifferences: number = 0;
	formattedTimeDifferences: string = '';

	constructor(private router: Router) {}

	ngOnInit(): void {
		const playerTime: number = this.player.totalTime || 0;
		this.formattedTime = TimeUtils.getTimeFromSeconds(playerTime);
		this.timeDifferences = playerTime - this.bestTime;
		this.formattedTimeDifferences = TimeUtils.getTimeFromSeconds(this.timeDifferences);
	}
	
	goToPlayerDetail(playerId: string): void {
		this.router.navigate(['/', APP_ROUTES.detail, playerId]);
	}

}
