import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './components/results/results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { RankingModule } from '../shared';

@NgModule({
	declarations: [ResultsComponent, PlayerComponent],
	imports: [CommonModule, ResultsRoutingModule, RankingModule]
})
export class ResultsModule {}
