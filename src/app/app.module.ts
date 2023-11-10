import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularPopupModalModule } from 'dist/angular-popup-modal';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPopupModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
