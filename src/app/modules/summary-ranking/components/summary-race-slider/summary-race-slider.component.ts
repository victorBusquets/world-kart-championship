import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-summary-race-slider',
	templateUrl: './summary-race-slider.component.html',
	styleUrls: ['./summary-race-slider.component.scss']
})
export class SummaryRaceSliderComponent implements OnDestroy {
	intervalTime: number = 100000;
	raceList: {raceName: string, raceKey: string}[];
	currentRaceIndex: number = 0;
	currentRaceKey: string = '';
	nextRaceKey: string = '';
	private subscriptions: Subscription[] = [];

	constructor(private rankingService: RankingService, private activatedRoute: ActivatedRoute) {
		this.raceList = this.rankingService.getRaceList();

		this.subscriptions.push(
			this.activatedRoute.params.subscribe( (params: any) =>{
				if (params['interval']) {
					this.intervalTime = params['interval'] > this.intervalTime ? params['interval'] : this.intervalTime;
				}
			})
		);

		this.setRaceKeys();
		setInterval(()=>this.setRaceKeys(), this.intervalTime * 1000);
	}

	
	ngOnDestroy(): void {
		this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
	}

	private setRaceKeys(): void{
		const nextIndex: number = (this.currentRaceIndex + 1 === this.raceList.length) ? 0 : this.currentRaceIndex + 1;

		this.currentRaceKey = this.raceList[this.currentRaceIndex].raceKey;
		this.nextRaceKey = this.raceList[nextIndex].raceKey;
		this.currentRaceIndex = nextIndex;
	}
}
