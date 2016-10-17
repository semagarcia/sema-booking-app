import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recovery-pwd',
    templateUrl: './recovery-pwd.component.html',
    styleUrls: ['./recovery-pwd.component.css']
})
export class RecoveryPwdComponent implements OnInit {
    private username;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    returnBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    requestNewPwd() {
        // if(!this.username) { ... }
        console.log('Requesting new password for: ' + this.username);
    }

}
