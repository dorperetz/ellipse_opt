import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularCesiumModule, ViewerConfiguration} from "angular-cesium";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule
  ],
  providers: [ViewerConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
