import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { getMockWindfarmArray } from '../mocks/windfarm';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isGetAllWindfarms(request)) {
      return this.createSuccessResponse(getMockWindfarmArray());
    }

    return next.handle(request);
  }

  private isGetAllWindfarms(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) && this.urlMatches(req, new RegExp('api/windfarms'));
  }

  private isGetRequest(req: HttpRequest<unknown>): boolean {
    return req.method === 'GET';
  }

  private urlMatches(req: HttpRequest<unknown>, regExp: RegExp): boolean {
    return regExp.test(req.url);
  }

  private createSuccessResponse(response: unknown): Observable<HttpResponse<unknown>> {
    return of(
      new HttpResponse(
        {
          body: response,
          status: 200
        }
      )
    );
  }
}
