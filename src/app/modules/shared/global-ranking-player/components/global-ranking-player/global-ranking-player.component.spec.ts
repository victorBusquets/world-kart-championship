import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalRankingPlayerComponent } from './global-ranking-player.component';

describe('GlobalRankingPlayerComponent', () => {
	let component: GlobalRankingPlayerComponent;
	let fixture: ComponentFixture<GlobalRankingPlayerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GlobalRankingPlayerComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GlobalRankingPlayerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
