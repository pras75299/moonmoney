import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { StatefranchiseComponent } from './statefranchise/statefranchise.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'account', component: AccountComponent},
  {path: 'state', component: StatefranchiseComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgetPassword', component: ForgetpassComponent},
  {path: 'products', component: ProductComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'achievement', component: AchievementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


