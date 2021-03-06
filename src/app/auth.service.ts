import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:5000/auth';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  login(): Promise<any> {
    const url = `${this.BASE_URL}/login`;
    // return this.http.post(url, {headers: this.headers}).toPromise();
    return Observable.of({ token: 'TOKEN_EXAMPLE' }).toPromise();
  }
}
