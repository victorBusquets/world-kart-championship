import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerDetailRoutingModule } from './player-detail-routing.module';
import { TeamLogoModule } from '../shared';

@NgModule({
	declarations: [PlayerDetailComponent],
	imports: [CommonModule, PlayerDetailRoutingModule, TeamLogoModule]
})
export class PlayerDetailModule {}
