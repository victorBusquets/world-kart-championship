import { Component } from '@angular/core';
import { GLOBAL_RANKING_KEY } from 'src/app/constants';
import { Player } from 'src/app/models';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
	selector: 'app-summary-ranking',
	templateUrl: './summary-ranking.component.html',
	styleUrls: ['./summary-ranking.component.scss']
})
export class SummaryRankingComponent {
	globalRankingKey: string = GLOBAL_RANKING_KEY;
	globalRankingInfo: Player[];
	globalRankingBestTimeInSeconds: number;
	
	constructor(private rankingService: RankingService) {
		this.globalRankingInfo = this.rankingService.getPlayers();
		this.globalRankingInfo = this.globalRankingInfo.slice(0, 3);
		this.globalRankingBestTimeInSeconds = this.globalRankingInfo[0].races[GLOBAL_RANKING_KEY].timeInSeconds;
	}


}
