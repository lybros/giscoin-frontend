import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { NvD3Module } from 'ng2-nvd3';
import 'nvd3';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsService } from './charts/charts.service';
import { MapComponent } from './map/map.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PageNotFoundComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    NvD3Module
  ],
  providers: [
    ChartsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
