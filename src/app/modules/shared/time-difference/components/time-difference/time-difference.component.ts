import { Component, Input, OnInit } from '@angular/core';
import { TimeUtils } from 'src/app/utils';

@Component({
	selector: 'app-time-difference',
	templateUrl: './time-difference.component.html',
	styleUrls: ['./time-difference.component.scss']
})
export class TimeDifferenceComponent implements OnInit {
	@Input() bestTime!: number;
	@Input() playerTime!: number;
	playerTimeFormatted!: string;
	timeDifference!: string;

	ngOnInit(): void {
		this.playerTimeFormatted = TimeUtils.getTimeFromSeconds(this.playerTime);
		this.timeDifference= TimeUtils.getTimeFromSeconds(this.playerTime - this.bestTime);
	}
}
