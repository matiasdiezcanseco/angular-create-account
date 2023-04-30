import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from '../session-storage/session-storage.service';

export interface SimulationForm {
  debitAmount: string;
  endDate: string;
  debitDay: string;
}

export type SimulationResponse =
  | {
      goal: string;
      interest: string;
      gain: string;
    }
  | undefined;

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {
    this.setSimulationForm(this.session.getData('simulationForm'));
    this.simulation$.next(this.session.getData('simulationResponse'));
  }

  private simulationForm$ = new BehaviorSubject<SimulationForm>({
    debitAmount: '',
    endDate: '',
    debitDay: '',
  });

  private setSimulationForm(form: SimulationForm) {
    this.simulationForm$.next(form);
    this.session.saveData('simulationForm', form);
  }

  public getSimulationForm(): Observable<SimulationForm> {
    return this.simulationForm$;
  }

  public resetLoginForm() {
    this.simulationForm$.next({
      debitAmount: '',
      endDate: '',
      debitDay: '',
    });
  }

  private simulation$ = new BehaviorSubject<SimulationResponse>(undefined);

  public getSimulationResponse(): Observable<SimulationResponse> {
    return this.simulation$;
  }

  public async simulate(params: SimulationForm) {
    this.setSimulationForm(params);
    await new Promise((r) => setTimeout(r, 1000));
    this.http.get('http://localhost:4000/simulate/1').subscribe((response) => {
      this.simulation$.next(response as SimulationResponse);
      this.session.saveData('simulationResponse', response);
    });
  }
}
