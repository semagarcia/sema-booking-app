import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './dashboard-home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { console.log('HomeComponent'); }

    ngOnInit() {
    }

    booking() {
        this.router.navigate(['/dashboard/booking']);
    }

    reservations() {
        this.router.navigate(['/dashboard/reservations']);
    }

    settings() {
        this.router.navigate(['/dashboard/settings']);
    }

}
