import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PersonneComponent} from './personne/personne.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonneService} from './services/personne.service';
import {MastheadComponent} from './masthead/masthead.component';
import {OrangedivComponent} from './orangediv/orangediv.component';
import {WhitedivComponent} from './whitediv/whitediv.component';
import {ProjectsdivComponent} from './projectsdiv/projectsdiv.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    MastheadComponent,
    OrangedivComponent,
    WhitedivComponent,
    ProjectsdivComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
