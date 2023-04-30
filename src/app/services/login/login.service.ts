import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage/session-storage.service';

export interface LoginForm {
  username: string;
  password: string;
}

export type LoginResponse =
  | {
      name: string;
    }
  | undefined;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginForm$ = new BehaviorSubject<LoginForm>({
    username: '',
    password: '',
  });

  private login$ = new BehaviorSubject<LoginResponse>(undefined);

  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {
    this.setLoginForm(this.session.getData('loginForm'));
    this.login$.next(this.session.getData('loginResponse'));
  }

  private setLoginForm(form: LoginForm) {
    this.loginForm$.next(form);
    this.session.saveData('loginForm', form);
  }

  public getLoginForm(): Observable<LoginForm> {
    return this.loginForm$;
  }

  public getLoginResponse(): Observable<LoginResponse> {
    return this.login$;
  }

  public resetLoginForm() {
    this.loginForm$.next({ username: '', password: '' });
  }

  public async login(credentials: { username: string; password: string }) {
    this.setLoginForm(credentials);
    await new Promise((r) => setTimeout(r, 1000));
    this.http.get('http://localhost:4000/login/1').subscribe((response) => {
      this.session.saveData('loginResponse', response);
      this.login$.next(response as LoginResponse);
    });
  }
}
