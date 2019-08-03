import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartComponent } from "./chart/chart.component";
import { EChartOptionDirective } from "./chart/echart-option.directive";
import { HighChartOptionDirective } from "./chart/highchart-option.directive";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    EChartOptionDirective,
    HighChartOptionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
