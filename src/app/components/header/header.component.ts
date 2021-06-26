import { Component } from '@angular/core';
import { APP_ROUTES } from 'src/app/constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	appRoutes = APP_ROUTES;
	menuOpen!: boolean;
}
