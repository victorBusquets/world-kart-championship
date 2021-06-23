import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './components/results/results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { RankingComponent } from './components/ranking/ranking.component';

@NgModule({
	declarations: [ResultsComponent, PlayerComponent, RankingComponent],
	imports: [CommonModule, ResultsRoutingModule]
})
export class ResultsModule {}
