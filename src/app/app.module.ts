import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';
import 'nvd3';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsService } from './charts/charts.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ChartsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
