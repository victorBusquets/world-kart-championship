import { Component, Input } from '@angular/core';
import { LinkConfig } from 'src/app/models';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss']
})
export class LinkComponent {
	@Input() linkConfig!: LinkConfig;
	@Input() darkMode!: boolean;
}
