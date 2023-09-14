import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyComponent } from './property/property.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';

@NgModule({
  declarations: [		
    AppComponent,
      NavBarComponent,
      PropertyComponent,
      PropertyCardComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
