import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormResponse, FormService } from '../../../services/form/form.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  formResponse$: Observable<FormResponse>;

  constructor(private router: Router, private formService: FormService) {
    this.formResponse$ = this.formService.getFormResponse();
  }

  onSuccess(form: any) {
    this.formService.registerClient(form);
    this.router.navigate(['/', 'success']);
  }
}
