import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerDetailRoutingModule } from './player-detail-routing.module';

@NgModule({
	declarations: [PlayerDetailComponent],
	imports: [CommonModule, PlayerDetailRoutingModule]
})
export class PlayerDetailModule {}
