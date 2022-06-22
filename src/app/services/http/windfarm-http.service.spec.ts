import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WindfarmHttpService } from './windfarm-http.service';
import { getMockWindfarmArray } from '../../mocks/windfarm';
import { Windfarm } from '../../models/windfarm';

describe('WindfarmService', () => {

  let httpTestingController: HttpTestingController;

  let windfarmService: WindfarmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    windfarmService = TestBed.inject(WindfarmHttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAllWindfarms', () => {
    it('makes an HTTP GET request to the correct URL', () => {
      const mockWindfarmArray: Windfarm[] = getMockWindfarmArray();

      windfarmService
        .getAllWindfarms()
        .subscribe(
          data => expect(data).toEqual(mockWindfarmArray)
        );

      const req = httpTestingController.expectOne('api/windfarms');
      expect(req.request.method).toEqual('GET');

      req.flush(mockWindfarmArray);
      httpTestingController.verify();
    });
  });

});
