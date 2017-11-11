import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartService } from './bar-chart/bar-chart.service';
import { LineChartService } from './line-chart/line-chart.service';
import { PieChartService } from './pie-chart/pie-chart.service';


@NgModule({
  declarations: [
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    ChartsRoutingModule
  ],
  providers: [
    BarChartService,
    LineChartService,
    PieChartService
  ]
})
export class ChartsModule { }
