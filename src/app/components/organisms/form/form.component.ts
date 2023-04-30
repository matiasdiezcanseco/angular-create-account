import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();

  public form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    city: ['', [Validators.required, Validators.minLength(5)]],
  });

  isFormSubmited = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.form.get(key)?.errors as any;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            'Key control: ' + key + ', keyError: ' + keyError + ', err value: ',
            controlErrors[keyError]
          );
        });
      }
    });
  }

  getSingleFieldError(fieldName: string) {
    if (!this.form.get(fieldName)?.invalid) return false;
    return (
      this.form.get(fieldName)?.dirty ||
      this.form.get(fieldName)?.touched ||
      this.isFormSubmited ||
      false
    );
  }

  onSubmit() {
    this.isFormSubmited = true;
    if (this.form.valid) {
      this.onSuccess.emit(this.form.value);
    }
  }
}
