import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityFactorComponent } from './capacity-factor.component';

describe('CapacityFactorComponent', () => {
  let component: CapacityFactorComponent;
  let fixture: ComponentFixture<CapacityFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
