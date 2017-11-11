import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;

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

  constructor() {
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
    this.data = this.sinAndCos();
  }

  sinAndCos() {
    let sin = [],
        sin2 = [],
        cos = [],
        rand = [],
        rand2 = []
        ;
    for (let i = 0; i < 100; i++) {
        sin.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i/10) });
        sin2.push({ x: i, y: Math.sin(i/5) * 0.4 - 0.25 });
        cos.push({ x: i, y: .5 * Math.cos(i/10) });
        rand.push({ x:i, y: Math.random() / 10 });
        rand2.push({ x: i, y: Math.cos(i/10) + Math.random() / 10 })
    }
    return [
        {
            area: true,
            values: sin,
            key: "Sine Wave",
            color: "#ff7f0e",
            strokeWidth: 4,
            classed: 'dashed'
        },
        {
            values: cos,
            key: "Cosine Wave",
            color: "#2ca02c"
        },
        {
            values: rand,
            key: "Random Points",
            color: "#2222ff"
        },
        {
            values: rand2,
            key: "Random Cosine",
            color: "#667711",
            strokeWidth: 3.5
        },
        {
            area: true,
            values: sin2,
            key: "Fill opacity",
            color: "#EF9CFB",
            fillOpacity: .1
        }
    ];
  }
}
