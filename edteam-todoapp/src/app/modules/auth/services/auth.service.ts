import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/1.0';

  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  submitLogin(credentials:{email:string, password:string}):Observable<any>{
    return this.httpClient.post(`${this.URL}/auth/login`, credentials).pipe(
      tap((stream: any) => {
        const { tokenSession } = stream;
        this.cookieService.put('token_session', tokenSession, {
          path: '/',
        });
      }),
      catchError(() => {
        console.log('algo ocurrio khhhk');
        return of([]);
      })
    )
  }
  // uniqueEmailValidator(): AsyncValidatorFn{

  // }
}
