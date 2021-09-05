import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegisterDTO} from "../model/registerDTO";
import {User} from "../model/user";

@Injectable()
export class AuthService {
  signUpURL: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdOmU9-YuRz4NjJhlPdebCQrNZsm4fFdc";
  signInURL: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdOmU9-YuRz4NjJhlPdebCQrNZsm4fFdc";

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<User> {
    const registerDTO: RegisterDTO = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    return this.http.post<User>(this.signInURL, registerDTO);
  }


  signUp(email: string, password: string): Observable<User> {
    const registerDTO: RegisterDTO = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    return this.http.post<User>(this.signUpURL, registerDTO);
  }

}
