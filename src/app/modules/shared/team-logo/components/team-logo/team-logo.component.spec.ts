import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamLogoComponent } from './team-logo.component';

describe('TeamLogoComponent', () => {
	const TEAM_NAME = 'VENDBLEND';
	let component: TeamLogoComponent;
	let fixture: ComponentFixture<TeamLogoComponent>;
	let nativeElement: any;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TeamLogoComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamLogoComponent);
		component = fixture.componentInstance;
		component.team = TEAM_NAME;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render icon and team name', ()=>{
		const themeClassName: string = '.team-' + TEAM_NAME.toLowerCase();
		expect(nativeElement.querySelector(themeClassName)).toBeTruthy();
		expect(nativeElement.querySelector('.team-logo__name').textContent).toEqual(TEAM_NAME);
	});

	it('should render only icon', ()=>{
		fixture = TestBed.createComponent(TeamLogoComponent);
		component = fixture.componentInstance;
		component.team = TEAM_NAME;
		component.showOnlyIcon = true;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
		const themeClassName: string = '.team-' + TEAM_NAME.toLowerCase();
		expect(nativeElement.querySelector(themeClassName)).toBeTruthy();
		expect(nativeElement.querySelector('.team-logo__name')).toBeFalsy();
	});
});
