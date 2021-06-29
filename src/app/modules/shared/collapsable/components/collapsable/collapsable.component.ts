import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-collapsable',
	templateUrl: './collapsable.component.html',
	styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent {
	@Input() title!: string;
	@Input() collapsed!: boolean;

	toggleCollapse(): void {
		this.collapsed = !this.collapsed;
	}
}
