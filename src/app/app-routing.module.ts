import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { AppComponent } from './app.component';
import { ChartsComponent }   from './charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
