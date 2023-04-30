import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  LoginResponse,
  LoginService,
} from '../../../services/login/login.service';
import { Observable } from 'rxjs';
import {
  SimulationResponse,
  SimulationForm,
  SimulationService,
} from '../../../services/simulation/simulation.service';

@Component({
  selector: 'app-simulation-page-one',
  templateUrl: './simulation-page-one.component.html',
  styleUrls: ['./simulation-page-one.component.scss'],
})
export class SimulationPageOneComponent {
  debitAmount = '';
  endDate = '';
  debitDay = '';

  public loginResponse$: Observable<LoginResponse>;
  public simulationResponse$: Observable<SimulationResponse>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private simulationService: SimulationService
  ) {
    this.loginResponse$ = this.loginService.getLoginResponse();
    this.simulationResponse$ = this.simulationService.getSimulationResponse();
  }

  onSimulationFormSubmit(form: SimulationForm) {
    this.simulationService.simulate(form).then(() => {
      this.router.navigate(['/', 'simulacion', '2']);
    });
  }
}
