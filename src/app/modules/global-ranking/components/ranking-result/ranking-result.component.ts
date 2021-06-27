import { Component } from '@angular/core';
import { SummaryRaceRankingComponent } from 'src/app/modules/summary-ranking/components/summary-race-ranking/summary-race-ranking.component';

@Component({
	selector: 'app-ranking-result',
	templateUrl: './ranking-result.component.html',
	styleUrls: ['./ranking-result.component.scss']
})
export class RankingResultComponent  extends SummaryRaceRankingComponent{}
