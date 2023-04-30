import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TypographyComponent } from './components/atoms/typography/typography.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { FooterComponent } from './components/molecules/footer/footer.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/molecules/login/login.component';
import { InputComponent } from './components/atoms/input/input.component';
import { SimulationPageOneComponent } from './components/pages/simulation-page-one/simulation-page-one.component';
import { SimulationPageTwoComponent } from './components/pages/simulation-page-two/simulation-page-two.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPageComponent } from './components/pages/form-page/form-page.component';
import { FormComponent } from './components/organisms/form/form.component';
import { SuccessPageComponent } from './components/pages/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    InputComponent,
    SimulationPageOneComponent,
    SimulationPageTwoComponent,
    FormPageComponent,
    FormComponent,
    SuccessPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
