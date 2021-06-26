import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-summary-race-ranking',
	templateUrl: './summary-race-ranking.component.html',
	styleUrls: ['./summary-race-ranking.component.scss']
})
export class SummaryRaceRankingComponent implements OnInit {
	@Input() raceKey!: string;
	raceList: {raceName: string, raceKey: string}[];
	players: Player[] = [];
	bestTimeInSeconds: number = 0;
	raceTitle: string = '';

	constructor(private rankingService: RankingService) {
		this.raceList = this.rankingService.getRaceList();
	}

	ngOnInit(): void {
		this.players = this.rankingService.getPlayers('ASC', this.raceKey);
		this.bestTimeInSeconds = this.players[0].races[this.raceKey].timeInSeconds;
		this.setRaceTitle();
	}

	private setRaceTitle(): void{
		this.raceTitle = this.raceList.find((raceInfo: {raceName: string, raceKey: string})=>{
			return raceInfo.raceKey === this.raceKey;
		})?.raceName || '';
	}
}
