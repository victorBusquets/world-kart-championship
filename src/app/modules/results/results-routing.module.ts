import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';

const ROUTES: Routes = [
	{
		path: '',
		component: ResultsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class ResultsRoutingModule {}
