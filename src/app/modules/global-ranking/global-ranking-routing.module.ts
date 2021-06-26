import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalRankingComponent } from './components/global-ranking/global-ranking.component';

const ROUTES: Routes = [
	{
		path: '',
		component: GlobalRankingComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class GlobalRankingRoutingModule {}
