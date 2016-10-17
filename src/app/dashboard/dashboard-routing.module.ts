import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard-home.component';
import { DashboardComponent } from './dashboard.component';
import { BookingComponent } from './../booking/booking.component';
import { ReservationsComponent } from './../reservations/reservations.component';
import { SettingsComponent } from './../settings/settings.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: DashboardComponent,
                children: [
                    { path: '', component: HomeComponent },
                    { path: 'booking', component: BookingComponent },
                    { path: 'reservations', component: ReservationsComponent },
                    { path: 'settings', component: SettingsComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule { }
