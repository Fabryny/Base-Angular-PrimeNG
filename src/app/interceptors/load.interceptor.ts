import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {

  @BlockUI() blockUI!: NgBlockUI;

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.router.url !== '/') {
      this.blockUI.start('Aguarde...');
      return next.handle(request).pipe(finalize(() => this.blockUI.stop()));
    }
    return next.handle(request);
  }
}
