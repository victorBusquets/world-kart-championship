import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GLOBAL_RANKING_KEY } from 'src/app/constants';
import { RankingResultComponent } from './ranking-result.component';

describe('RankingResultComponent', () => {
	let component: RankingResultComponent;
	let fixture: ComponentFixture<RankingResultComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RankingResultComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RankingResultComponent);
		component = fixture.componentInstance;
		component.raceKey = GLOBAL_RANKING_KEY;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
