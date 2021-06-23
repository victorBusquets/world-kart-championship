import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';

const ROUTES: Routes = [
	{
		path: '',
		component: PlayerDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class PlayerDetailRoutingModule {}
