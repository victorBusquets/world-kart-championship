import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-ranking',
	templateUrl: './ranking.component.html',
	styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
	@Input() ranking!: number;
}
