import { Component, OnInit } from '@angular/core';

import { ChartsService } from './charts.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  lineChart;
  barChart;
  pieChart;
  lineChartData;
  barChartData;
  pieChartData;

  constructor(private chartsService: ChartsService) {
    this.lineChart = {
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
    };

    this.barChart = {
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
    };

    this.pieChart = {
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
    };
  }

  ngOnInit() {
    this.chartsService.getLineChartData().subscribe(data => this.lineChartData = data);
    this.chartsService.getBarChartData().subscribe(data => this.barChartData = data);
    this.chartsService.getPieChartData().subscribe(data => this.pieChartData = data);
  }
}
