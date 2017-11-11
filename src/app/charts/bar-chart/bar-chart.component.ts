import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BarChartService } from './bar-chart.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css',
    './bar-chart.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  options;
  data;

  constructor(private barChartService: BarChartService) {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showValues: true,
        valueFormat: function(d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
  }

  ngOnInit() {
    this.barChartService.getData().subscribe(data => this.data = data);
  }
}
