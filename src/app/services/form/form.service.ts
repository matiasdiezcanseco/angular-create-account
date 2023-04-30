import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from '../session-storage/session-storage.service';

export interface Form {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

export type FormResponse =
  | {
      status: 'success' | 'error';
      account: string;
    }
  | undefined;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {
    this.setForm(this.session.getData('form'));
    this.formResponse$.next(this.session.getData('formResponse'));
  }

  private form$ = new BehaviorSubject<Form>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  public getForm() {
    return this.form$;
  }

  public setForm(form: Form) {
    this.form$.next(form);
    this.session.saveData('form', form);
  }

  private formResponse$ = new BehaviorSubject<FormResponse>(undefined);

  public getFormResponse() {
    return this.formResponse$;
  }

  public async registerClient(form: Form) {
    this.setForm(form);
    await new Promise((r) => setTimeout(r, 1000));
    this.http.get('http://localhost:4000/form/1').subscribe((response) => {
      this.formResponse$.next(response as FormResponse);
      this.session.saveData('formResponse', response);
      return response;
    });
  }
}
