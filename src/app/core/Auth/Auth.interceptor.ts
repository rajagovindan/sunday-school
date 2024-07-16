import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  private requests: HttpRequest<any>[] = [];
  uploadFlag: any;
  constructor(
    //  private localStorageService: LocalStorageService,
    private injector: Injector,
    public router: Router,
  ) { }
  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    //this.helperService.isLoading.next(this.requests.length > 0);
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const token: any = sessionStorage.getItem('token')
      ? sessionStorage.getItem('token')
      : null;
    if (token) {
      let UserToken:any = token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${UserToken}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.removeRequest(request);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.removeRequest(request);
        let data = {
          reason: error && error.error.message ? error.error.reason : error.error.message,
          status: error.status
        };
        // this.helperService.isLoading.next(false);
        return throwError(error);
      }));
  }
}
