import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World kart championship!';

  constructor(private playerService: PlayerService) {
    console.log('Get players', this.playerService.getPlayers());
  }
}
