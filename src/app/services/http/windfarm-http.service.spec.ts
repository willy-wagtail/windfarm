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
        .getAllWindfarms$()
        .subscribe(
          data => expect(data).toEqual(mockWindfarmArray)
        );

      const req = httpTestingController.expectOne('api/windfarms');
      expect(req.request.method).toEqual('GET');

      req.flush(mockWindfarmArray);
      httpTestingController.verify();
    });

    it('throws error if response fails typeguard', () => {
      const mockWindfarmArray: any[] = getMockWindfarmArray();
      mockWindfarmArray[1].name = 123 // should be of type string

      windfarmService
        .getAllWindfarms$()
        .subscribe(
          {
            next: _ => fail('Expected typeguard to throw exception'),
            error: e => expect(e.message).toEqual('TypeGuard check failed.')
          }
        );

      const req = httpTestingController.expectOne('api/windfarms');
      expect(req.request.method).toEqual('GET');

      req.flush(mockWindfarmArray);
      httpTestingController.verify();
    });
  });
});
