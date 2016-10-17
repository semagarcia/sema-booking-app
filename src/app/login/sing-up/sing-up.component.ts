import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sing-up',
    templateUrl: './sing-up.component.html',
    styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
    private username;
    private password;
    private password2;
    private email;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    returnBack() {
        this.router.navigate(['/login']);
    }

    requestNewPwd() {
        console.log('user -> ' + this.username);
        console.log('pass -> ' + this.password);
        console.log('pass2 -> ' + this.password2);
        console.log('email -> ' + this.email);
    }

}
