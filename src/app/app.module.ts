import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TopnavbarComponent } from './header/topnavbar/topnavbar.component';
import { MainnavbarComponent } from './header/mainnavbar/mainnavbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { TermsComponent } from './terms/terms.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from './contact/contact.component';
import { StatefranchiseComponent } from './statefranchise/statefranchise.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AchievementComponent } from './achievement/achievement.component';
import { PlanComponent } from './plan/plan.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavbarComponent,
    MainnavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    AccountComponent,
    TermsComponent,
    LegalComponent,
    ContactComponent,
    StatefranchiseComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpassComponent,
    AchievementComponent,
    PlanComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
