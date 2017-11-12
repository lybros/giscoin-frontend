import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ChartsMock } from './charts-mock';

const chartsMock = new ChartsMock();

@Injectable()
export class ChartsService {
  getPieChartData() {
    return Observable.of(chartsMock.pieChartData);
  }

  getLineChartData() {
    return Observable.of(chartsMock.sinAndCos());
  }

  getBarChartData() {
    return Observable.of(chartsMock.barChartData);
  }

}
