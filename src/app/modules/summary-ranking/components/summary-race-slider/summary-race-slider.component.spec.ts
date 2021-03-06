import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SummaryRaceSliderComponent } from './summary-race-slider.component';

describe('SummaryRaceSliderComponent', () => {
	let component: SummaryRaceSliderComponent;
	let fixture: ComponentFixture<SummaryRaceSliderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SummaryRaceSliderComponent],
			imports: [RouterModule.forRoot([])]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryRaceSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
