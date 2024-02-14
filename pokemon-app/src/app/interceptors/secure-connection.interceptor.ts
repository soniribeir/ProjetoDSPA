import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class SecureConnectionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const secureReq = request.clone(
      { url: request.url.replace('http://', 'https://') }
    )
    return next.handle(secureReq);
  }
}
