import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './components/results/results.component';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
	declarations: [ResultsComponent],
	imports: [CommonModule, ResultsRoutingModule]
})
export class ResultsModule {}
