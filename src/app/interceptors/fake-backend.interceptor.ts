import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

import { getMockWindfarmArray } from '../mocks/windfarm';
import { getMockMeterReadings_forOneDay } from '../mocks/meter-reading';
import { MeterReading } from '../models/meter-reading';
import { isISODateString } from '../models/datetime/date';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.isGetWindfarmMeterReadings(request)) {
      const firstDay = request.params.get('fromDate');
      const lastDay = request.params.get('toDate');

      const mockMeterReadings: MeterReading[] =
        isISODateString(firstDay) && isISODateString(lastDay)

          ? getMockMeterReadings_forOneDay(firstDay)
            .concat(getMockMeterReadings_forOneDay(lastDay))

          : getMockMeterReadings_forOneDay();

      return this.createSuccessResponse$(
        mockMeterReadings
      )
        .pipe(
          delay(1500)
        );
    }

    if (this.isGetAllWindfarms(request)) {
      return this.createSuccessResponse$(
        getMockWindfarmArray()
      )
        .pipe(
          delay(1500)
        );
    }

    return next.handle(request);
  }

  private isGetWindfarmMeterReadings(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) &&
      this.urlMatches(req, new RegExp('api/windfarms/')) &&
      this.urlMatches(req, new RegExp('/readings'));
  }

  private isGetAllWindfarms(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) &&
      this.urlMatches(req, new RegExp('api/windfarms'));
  }

  private isGetRequest(req: HttpRequest<unknown>): boolean {
    return req.method === 'GET';
  }

  private urlMatches(req: HttpRequest<unknown>, regExp: RegExp): boolean {
    return regExp.test(req.url);
  }

  private createSuccessResponse$(response: unknown): Observable<HttpResponse<unknown>> {
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
