import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string;
  loginURL: string
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.baseURL = environment.baseURL;
    this.loginURL = environment.loginURL;
  }


  login(data: any) {
    return this.http.post<any>(this.loginURL, data)
      .pipe(map(user => {
        return user;
      }));
  }


  public isLoggedIn(): boolean {
    let token: any = sessionStorage.getItem("token");
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
