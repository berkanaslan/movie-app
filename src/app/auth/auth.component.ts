import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isLoginMode: boolean = false;
    formGroup: FormGroup = new FormGroup({
        emailController: new FormControl("", [Validators.required, Validators.email]),
        passwordController: new FormControl("", [Validators.required])
    });

    constructor() {
    }

    ngOnInit(): void {
    }


    onToggleChanged() {
        this.isLoginMode = !this.isLoginMode;
    }

    onLoginButtonPressed() {
        if (this.formGroup.invalid) {
            return;
        }

        console.log(this.formGroup.value);

    }
}
