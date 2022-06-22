import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { Windfarm, isWindfarmArray } from '../../models/windfarm';
import { checkTypeGuard } from '../../util/check-type-guard';

@Injectable({
  providedIn: 'root'
})
export class WindfarmHttpService {

  private readonly windfarmsUrl = 'api/windfarms'

  constructor(private http: HttpClient) { }

  getAllWindfarms(): Observable<Windfarm[]> {
    return this.http
      .get<Windfarm[]>(this.windfarmsUrl)
      .pipe(
        tap(val => checkTypeGuard(val, isWindfarmArray))
      );
  }

}
