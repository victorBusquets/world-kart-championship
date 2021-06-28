import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { LinkModule } from './modules/shared';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
