import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkConfig } from 'src/app/models';

@Component({
	selector: 'app-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
	@Input() menuOpen!: boolean;
	@Input() links!: LinkConfig[];
	@Output() menuOpenChange: EventEmitter<boolean> = new EventEmitter();

	toggleMenu(): void {
		this.menuOpenChange.emit(!this.menuOpen);
	}
}
