import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDifferenceComponent } from './components/time-difference/time-difference.component';

@NgModule({
	declarations: [TimeDifferenceComponent],
	exports: [TimeDifferenceComponent],
	imports: [CommonModule]
})
export class TimeDifferenceModule {}
