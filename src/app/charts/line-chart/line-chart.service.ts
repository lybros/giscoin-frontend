import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LineChartService {
  getData() { return Observable.of(this.sinAndCos()); }

  private sinAndCos() {
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
