import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryRankingComponent } from './components/summary-ranking/summary-ranking.component';

const ROUTES: Routes = [
	{
		path: '',
		component: SummaryRankingComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class SummaryRankingRoutingModule {}
