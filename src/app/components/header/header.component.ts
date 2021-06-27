import { Component } from '@angular/core';
import { APP_ROUTES } from 'src/app/constants';
import { LinkConfig } from 'src/app/models';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	menuOpen!: boolean;
	links: LinkConfig[] = [
		{
			routerLink: ['/'],
			text: 'Inicio'
		},
		{
			routerLink: ['/', APP_ROUTES.summaryRanking],
			text: 'Resumen clasificación'
		}
	];
	
	toggleMenu(): void{
		this.menuOpen = !this.menuOpen;
	}
}
