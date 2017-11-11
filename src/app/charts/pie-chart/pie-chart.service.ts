import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const PIE_CHART_DATA = [
  {
    key: "One",
    y: 5
  },
  {
    key: "Two",
    y: 2
  },
  {
    key: "Three",
    y: 9
  },
  {
    key: "Four",
    y: 7
  },
  {
    key: "Five",
    y: 4
  },
  {
    key: "Six",
    y: 3
  },
  {
    key: "Seven",
    y: .5
  }
];

@Injectable()
export class PieChartService {
  getData() { return Observable.of(PIE_CHART_DATA); }
}
