import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LineChartService } from './line-chart.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [
    '../../../../node_modules/nvd3/build/nv.d3.css',
    './line-chart.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {
  options;
  data;

  constructor(private lineChartService: LineChartService) {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d) { return d.x; },
        y: function(d) { return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (ms)'
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        }
      }
    }
  }

  ngOnInit() {
    this.lineChartService.getData().subscribe(data => this.data = data);
  }
}
