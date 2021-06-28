import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryRankingComponent } from './summary-ranking.component';

describe('SummaryRankingComponent', () => {
	let component: SummaryRankingComponent;
	let fixture: ComponentFixture<SummaryRankingComponent>;
	let nativeElement: any;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SummaryRankingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryRankingComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render first three summary ranking players', () => {
		expect(nativeElement.querySelectorAll('.summary-ranking__player').length).toEqual(3);
	});
});
