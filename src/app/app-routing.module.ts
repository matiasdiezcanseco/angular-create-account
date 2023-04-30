import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './components/pages/form-page/form-page.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { SimulationPageOneComponent } from './components/pages/simulation-page-one/simulation-page-one.component';
import { SimulationPageTwoComponent } from './components/pages/simulation-page-two/simulation-page-two.component';
import { SuccessPageComponent } from './components/pages/success-page/success-page.component';

const routes: Routes = [
  {
    title: 'Landing',
    path: '',
    component: LandingPageComponent,
  },
  {
    title: 'Simulacion - 1',
    path: 'simulacion/1',
    component: SimulationPageOneComponent,
  },
  {
    title: 'Simulacion - 2',
    path: 'simulacion/2',
    component: SimulationPageTwoComponent,
  },
  {
    title: 'Form',
    path: 'form',
    component: FormPageComponent,
  },
  {
    title: 'Success',
    path: 'success',
    component: SuccessPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
