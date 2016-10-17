import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent, SingUpComponent, RecoveryPwdComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login', redirectTo: '/', pathMatch: 'full' },
  { path: 'login/recovery-password',  component: RecoveryPwdComponent },
  { path: 'login/sing-up',  component: SingUpComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
