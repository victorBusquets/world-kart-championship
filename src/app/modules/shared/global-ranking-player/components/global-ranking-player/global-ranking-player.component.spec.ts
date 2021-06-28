import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GLOBAL_RANKING_KEY } from 'src/app/constants';
import { Player } from 'src/app/models';
import { PLAYER_MOCK } from 'src/app/services/playerMock';
import { GlobalRankingPlayerComponent } from './global-ranking-player.component';

describe('GlobalRankingPlayerComponent', () => {
	let component: GlobalRankingPlayerComponent;
	let fixture: ComponentFixture<GlobalRankingPlayerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GlobalRankingPlayerComponent],
			imports: [RouterTestingModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GlobalRankingPlayerComponent);
		component = fixture.componentInstance;
		component.player = new Player(PLAYER_MOCK[0]);
		component.ranking = 1;
		component.bestTime = component.player.races[GLOBAL_RANKING_KEY].timeInSeconds;
		component.playerTimeInSeconds = component.player.races[GLOBAL_RANKING_KEY].timeInSeconds;
		component.detailMode = false;
		component.reducedInfo = false;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
