import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GLOBAL_RANKING_KEY } from 'src/app/constants';
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
		component.raceKey = GLOBAL_RANKING_KEY;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
