import { ComponentFixture, TestBed } from '@angular/core/testing';
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
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
