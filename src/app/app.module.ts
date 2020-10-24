import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyCardComponent } from './property-card/property-card.component';

@NgModule({
  declarations: [
      AppComponent,
      NavBarComponent,
      PropertyListComponent,
      PropertyCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }