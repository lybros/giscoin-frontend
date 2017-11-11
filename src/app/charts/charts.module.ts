import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';


import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';


@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    ChartsRoutingModule
  ],
  providers: []
})
export class ChartsModule { }
