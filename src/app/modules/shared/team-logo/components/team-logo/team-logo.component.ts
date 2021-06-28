import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-team-logo',
	templateUrl: './team-logo.component.html',
	styleUrls: ['./team-logo.component.scss']
})
export class TeamLogoComponent {
	@Input() team!: string;
	@Input() showOnlyIcon!: boolean;
	teamClassName: string = '';

	ngOnInit(): void{
		this.teamClassName = 'team-' + this.team?.toLowerCase();
	}
}
