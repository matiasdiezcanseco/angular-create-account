import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationPageOneComponent } from './simulation-page-one.component';

describe('SimulationPageOneComponent', () => {
  let component: SimulationPageOneComponent;
  let fixture: ComponentFixture<SimulationPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulationPageOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimulationPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
