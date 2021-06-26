import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalRankingPlayerModule, RankingModule, TeamLogoModule, TimeDifferenceModule, TitleModule } from '../shared';
import { GlobalRankingRoutingModule } from './global-ranking-routing.module';
import { GlobalRankingComponent } from './components/global-ranking/global-ranking.component';

@NgModule({
	declarations: [GlobalRankingComponent],
	imports: [
		CommonModule,
		GlobalRankingRoutingModule,
		RankingModule,
		TimeDifferenceModule,
		TitleModule,
		TeamLogoModule,
		GlobalRankingPlayerModule
	]
})
export class GlobalRankingModule {}
