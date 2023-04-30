import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResponse, FormService } from '../../../services/form/form.service';
import {
  LoginResponse,
  LoginService,
} from '../../../services/login/login.service';
import {
  SimulationResponse,
  SimulationService,
} from '../../../services/simulation/simulation.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent {
  public simulationResponse$: Observable<SimulationResponse>;
  public formResponse$: Observable<FormResponse>;
  public loginResponse$: Observable<LoginResponse>;

  constructor(
    private simulationService: SimulationService,
    private formService: FormService,
    private loginService: LoginService
  ) {
    this.simulationResponse$ = this.simulationService.getSimulationResponse();
    this.formResponse$ = this.formService.getFormResponse();
    this.loginResponse$ = this.loginService.getLoginResponse();
  }
}
