import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  baseUrl: string = environment.apiURLBase;

  urlsToNotUse: Array<string>;


  constructor() {
    this.urlsToNotUse= [
      '/api/usuarios/',
      '/api/usuarios/.+',
      '/oauth/token ',
      '/oauth/token/.+'
    ];
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
      const tokenString = localStorage.getItem("access_token");

      const url = request.url;

      if( tokenString && !url.endsWith("/oauth/token")){
        const token = JSON.parse(tokenString);
        const jwt = token.access_token;
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + jwt
          }
        })
      }
      return next.handle(request);

  }

}
