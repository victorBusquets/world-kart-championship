import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [LinkComponent],
	exports: [LinkComponent],
	imports: [CommonModule, RouterModule]
})
export class LinkModule {}
