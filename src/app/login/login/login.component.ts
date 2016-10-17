import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private username;
    private password;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    signUp() {
        this.router.navigate(['/login/sing-up']);
    }

    login() {
        //if(!this.username || !this.password) {

        //} else {
            // Send to backend
            this.router.navigate(['/dashboard']);
        //}

    }

}
