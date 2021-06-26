import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingModule, TimeDifferenceModule, TitleModule } from '../shared';
import { GlobalRankingRoutingModule } from './global-ranking-routing.module';
import { GlobalRankingPlayerComponent } from './components/global-ranking-player/global-ranking-player.component';
import { GlobalRankingComponent } from './components/global-ranking/global-ranking.component';

@NgModule({
	declarations: [GlobalRankingPlayerComponent, GlobalRankingComponent],
	imports: [CommonModule, GlobalRankingRoutingModule, RankingModule, TimeDifferenceModule, TitleModule]
})
export class GlobalRankingModule {}
