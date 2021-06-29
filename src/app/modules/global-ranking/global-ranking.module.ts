import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsableModule, GlobalRankingPlayerModule, RankingModule, TeamLogoModule, TimeDifferenceModule, TitleModule } from '../shared';
import { GlobalRankingRoutingModule } from './global-ranking-routing.module';
import { GlobalRankingComponent } from './components/global-ranking/global-ranking.component';
import { RankingResultComponent } from './components/ranking-result/ranking-result.component';

@NgModule({
	declarations: [GlobalRankingComponent, RankingResultComponent],
	imports: [
		CommonModule,
		GlobalRankingRoutingModule,
		RankingModule,
		TimeDifferenceModule,
		TitleModule,
		TeamLogoModule,
		GlobalRankingPlayerModule,
		CollapsableModule
	]
})
export class GlobalRankingModule {}
