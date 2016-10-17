import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { DashboardModule } from './dashboard/dashboard-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent, SingUpComponent, RecoveryPwdComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/dashboard-home.component';
import { BookingComponent } from './booking/booking.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SettingsComponent } from './settings/settings.component';

import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    BookingComponent,
    ReservationsComponent,
    SingUpComponent,
    RecoveryPwdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
