import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsableComponent } from './components/collapsable/collapsable.component';
import { TitleModule } from '../title/title.module';


@NgModule({
	declarations: [CollapsableComponent],
	exports: [CollapsableComponent],
	imports: [CommonModule, TitleModule]
})
export class CollapsableModule {}
