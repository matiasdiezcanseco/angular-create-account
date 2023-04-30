import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  LoginResponse,
  LoginService,
} from '../../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  public loginResponse$: Observable<LoginResponse>;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginResponse$ = this.loginService.getLoginResponse();
  }

  onSubmitForm(values: { username: string; password: string }) {
    this.loginService.login(values).then(() => {
      this.router.navigate(['/', 'simulacion', '1']);
    });
  }
}
