import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;

  formGroup: FormGroup = new FormGroup({
    emailController: new FormControl("", [Validators.required, Validators.email]),
    passwordController: new FormControl("", [Validators.required])
  });

  authResponse: Observable<User>;

  isLoading: boolean = false;
  errorMessage: string;

  constructor(private authService: AuthService) {
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

    this.errorMessage = null;

    this.isLoading = true;
    if (this.isLoginMode) {
      this.authResponse = this.authService.signIn(this.formGroup.value.emailController, this.formGroup.value.passwordController);
    } else {
      this.authResponse = this.authService.signUp(this.formGroup.value.emailController, this.formGroup.value.passwordController);
    }

    console.log(this.authResponse.subscribe(value => {
      console.log(value);
      this.isLoading = false;
    }, error => {
      this.errorMessage = error;
      this.isLoading = false;
    }));

    this.formGroup.reset();
  }
}
