import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindfarmComponent } from './windfarm.component';

describe('WindfarmComponent', () => {
  let component: WindfarmComponent;
  let fixture: ComponentFixture<WindfarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindfarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
