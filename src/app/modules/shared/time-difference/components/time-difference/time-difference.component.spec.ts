import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeUtils } from 'src/app/utils';
import { TimeDifferenceComponent } from './time-difference.component';

describe('TimeDifferenceComponent', () => {
	const DEFAULT_PLAYER_TIME = 10050;
	const DEFAULT_BEST_TIME = 10000;
	let component: TimeDifferenceComponent;
	let fixture: ComponentFixture<TimeDifferenceComponent>;
	let nativeElement: any;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TimeDifferenceComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TimeDifferenceComponent);
		component = fixture.componentInstance;
		component.playerTime = DEFAULT_PLAYER_TIME;
		component.bestTime = DEFAULT_BEST_TIME;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render player time and difference', ()=>{
		expect(nativeElement.querySelector('.player-time')).toBeTruthy();
		expect(nativeElement.querySelector('.time-difference')).toBeTruthy();
		expect(nativeElement.querySelector('.time-difference.time-difference--hidden')).toBeFalsy();
	});

	it('should render player time and difference should be hidden', ()=>{
		fixture = TestBed.createComponent(TimeDifferenceComponent);
		component = fixture.componentInstance;
		component.playerTime = DEFAULT_BEST_TIME;
		component.bestTime = DEFAULT_BEST_TIME;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();

		expect(nativeElement.querySelector('.player-time')).toBeTruthy();
		expect(nativeElement.querySelector('.time-difference')).toBeTruthy();
		expect(nativeElement.querySelector('.time-difference.time-difference--hidden')).toBeTruthy();
	});

	it('should render player time and difference formatted', ()=>{
		expect(nativeElement.querySelector('.player-time').textContent).toEqual(TimeUtils.getTimeFromSeconds(DEFAULT_PLAYER_TIME));
		expect(nativeElement.querySelector('.time-difference__value').textContent).toEqual(TimeUtils.getTimeFromSeconds(DEFAULT_PLAYER_TIME - DEFAULT_BEST_TIME));
	});
});
