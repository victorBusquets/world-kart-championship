import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryRaceRankingComponent } from './summary-race-ranking.component';

describe('SummaryRaceRankingComponent', () => {
	let component: SummaryRaceRankingComponent;
	let fixture: ComponentFixture<SummaryRaceRankingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SummaryRaceRankingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryRaceRankingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
