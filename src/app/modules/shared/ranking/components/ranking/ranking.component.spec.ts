import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingComponent } from './ranking.component';

describe('RankingComponent', () => {
	let component: RankingComponent;
	let fixture: ComponentFixture<RankingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RankingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RankingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render gold ranking', () => {
		fixture = TestBed.createComponent(RankingComponent);
		component = fixture.componentInstance;
		component.ranking = 1;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('.ranking--gold')).toBeTruthy();
	});

	it('should render silver ranking', () => {
		fixture = TestBed.createComponent(RankingComponent);
		component = fixture.componentInstance;
		component.ranking = 2;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('.ranking--silver')).toBeTruthy();
	});

	it('should render bronze ranking', () => {
		fixture = TestBed.createComponent(RankingComponent);
		component = fixture.componentInstance;
		component.ranking = 3;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('.ranking--bronze')).toBeTruthy();
	});

	it('should render default ranking', () => {
		fixture = TestBed.createComponent(RankingComponent);
		component = fixture.componentInstance;
		component.ranking = 4;
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('.ranking--default')).toBeTruthy();
	});
});
