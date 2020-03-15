import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonneService} from './services/personne.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
