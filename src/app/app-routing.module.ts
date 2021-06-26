import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES, APP_ROUTE_IDS } from './constants';

const routes: Routes = [
  {
    path: APP_ROUTES.main,
    loadChildren: () =>
      import(
        'src/app/modules/global-ranking/global-ranking.module'
      ).then((module) => module.GlobalRankingModule)	
  }, 
  {
    path: APP_ROUTES.summaryRanking,
    loadChildren: () =>
      import(
        'src/app/modules/summary-ranking/summary-ranking.module'
      ).then((module) => module.SummaryRankingModule)	
  },
  {
    path: APP_ROUTES.summaryRanking + '/' + APP_ROUTE_IDS.interval,
    loadChildren: () =>
      import(
        'src/app/modules/summary-ranking/summary-ranking.module'
      ).then((module) => module.SummaryRankingModule)	
  },
  {
    path: APP_ROUTES.detail + '/' + APP_ROUTE_IDS.playerId,
    loadChildren: () =>
      import(
        'src/app/modules/player-detail/player-detail.module'
      ).then((module) => module.PlayerDetailModule)	
  },
  {
		path: '**',
		pathMatch: 'full',
		redirectTo: APP_ROUTES.main
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
