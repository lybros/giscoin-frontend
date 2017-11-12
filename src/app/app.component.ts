import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  }

  tokenPresent(): boolean {
    return sessionStorage.getItem('token') != null;
  }

  onLogin(): void {
    this.auth.login().then((data) => {
      sessionStorage.setItem('token', data.token)
    })
    .catch((err) => {
      alert(err);
    });
  }
}
