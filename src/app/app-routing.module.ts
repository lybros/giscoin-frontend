import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: 'charts', component: ChartsComponent },
  { path: 'map', component: MapComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
