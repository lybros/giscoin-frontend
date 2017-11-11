import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { ChartsComponent }   from './charts.component';
 
const chartsRoutes: Routes = [
  { path: 'charts', component: ChartsComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(chartsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartsRoutingModule {}
