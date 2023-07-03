import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthenticationService implements  HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let username = 'Subil'
    let password = 'angular'
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

    request = request.clone({
      setHeaders : {

        Authorization  :  basicAuthHeaderString
      }
    })

    return next.handle(request);
    
  }

  constructor() { }
}
