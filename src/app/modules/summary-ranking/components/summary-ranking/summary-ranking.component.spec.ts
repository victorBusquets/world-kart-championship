import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryRankingComponent } from './summary-ranking.component';

describe('SummaryRankingComponent', () => {
	let component: SummaryRankingComponent;
	let fixture: ComponentFixture<SummaryRankingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SummaryRankingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryRankingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
