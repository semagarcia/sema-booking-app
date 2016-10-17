import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    save() {

    }

    cancel() {
        this.router.navigate(['/dashboard']);
    }

}
