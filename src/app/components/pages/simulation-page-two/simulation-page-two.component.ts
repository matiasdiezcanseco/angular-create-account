import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  SimulationResponse,
  SimulationService,
} from '../../../services/simulation/simulation.service';

@Component({
  selector: 'app-simulation-page-two',
  templateUrl: './simulation-page-two.component.html',
  styleUrls: ['./simulation-page-two.component.scss'],
})
export class SimulationPageTwoComponent {
  goal = '';
  interestAmount = '';
  interestPercentage = '';

  simulationResponse$: Observable<SimulationResponse>;

  constructor(
    private simulationService: SimulationService,
    private router: Router
  ) {
    this.simulationResponse$ = this.simulationService.getSimulationResponse();
  }

  onNextPage() {
    this.router.navigate(['/', 'form']);
  }
}
