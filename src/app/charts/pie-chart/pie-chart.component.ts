import { Component, OnInit } from '@angular/core';

import { PieChartService } from './pie-chart.service';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {
  options;
  data;

  constructor(private pieChartService: PieChartService) {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    }
  }

  ngOnInit() {
    this.pieChartService.getData().subscribe(data => this.data = data);
  }
}
