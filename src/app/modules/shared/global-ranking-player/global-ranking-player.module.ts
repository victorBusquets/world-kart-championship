import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalRankingPlayerComponent } from './components/global-ranking-player/global-ranking-player.component';
import { TimeDifferenceModule } from '../time-difference/time-difference.module';
import { RankingModule } from '../ranking/ranking.module';
import { TeamLogoModule } from '../team-logo/team-logo.module';


@NgModule({
	declarations: [GlobalRankingPlayerComponent],
	exports: [GlobalRankingPlayerComponent],
	imports: [CommonModule, TimeDifferenceModule, RankingModule, TeamLogoModule]
})
export class GlobalRankingPlayerModule {}
