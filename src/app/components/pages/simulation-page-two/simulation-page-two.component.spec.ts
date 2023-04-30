import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationPageTwoComponent } from './simulation-page-two.component';

describe('SimulationPageTwoComponent', () => {
  let component: SimulationPageTwoComponent;
  let fixture: ComponentFixture<SimulationPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
