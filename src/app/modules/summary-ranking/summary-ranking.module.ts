import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryRankingRoutingModule } from './summary-ranking-routing.module';
import { SummaryRankingComponent } from './components/summary-ranking/summary-ranking.component';
import { RankingModule, TeamLogoModule, TimeDifferenceModule, TitleModule } from '../shared';
import { SummaryRaceSliderComponent } from './components/summary-race-slider/summary-race-slider.component';
import { SummaryRaceRankingComponent } from './components/summary-race-ranking/summary-race-ranking.component';


@NgModule({
	declarations: [SummaryRankingComponent, SummaryRaceSliderComponent, SummaryRaceRankingComponent],
	imports: [CommonModule, SummaryRankingRoutingModule, RankingModule, TimeDifferenceModule, TitleModule, TeamLogoModule]
})
export class SummaryRankingModule {}
