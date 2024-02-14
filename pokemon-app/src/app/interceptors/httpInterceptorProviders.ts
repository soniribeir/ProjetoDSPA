import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecureConnectionInterceptor } from './secure-connection.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SecureConnectionInterceptor, multi: true }
];
