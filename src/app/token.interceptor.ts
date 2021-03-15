import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptore girdi');
    let headers = request.headers;
    headers = headers.append('Auth', 'Bearer 123abvDEF');

    const authReq = request.clone({headers});

    return next.handle(authReq);
  }
}
