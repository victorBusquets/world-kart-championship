import { Component } from '@angular/core';
import { RaceInfo } from 'src/app/models';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-global-ranking',
	templateUrl: './global-ranking.component.html',
	styleUrls: ['./global-ranking.component.scss']
})
export class GlobalRankingComponent {
	raceList: RaceInfo[];

	
	constructor(private rankingService: RankingService) {
		this.raceList = this.rankingService.getRaceList();
	}
}
