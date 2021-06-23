import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
	selector: 'app-player-detail',
	templateUrl: './player-detail.component.html',
	styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnDestroy {
	player: Player | undefined;
	private subscriptions: Subscription[] = [];

	constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService) {
		this.subscriptions.push(
			this.activatedRoute.params.subscribe( (params: any) =>{
				const playerId: string = params['playerId'];
				this.player = this.playerService.getPlayer(playerId);
			})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
	}
}
