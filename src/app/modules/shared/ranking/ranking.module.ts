import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
	declarations: [RankingComponent],
	exports: [RankingComponent],
	imports: [CommonModule]
})
export class RankingModule {}
