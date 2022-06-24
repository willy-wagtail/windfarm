import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityFactorTableComponent } from './capacity-factor-table.component';

describe('CapacityFactorTableComponent', () => {
  let component: CapacityFactorTableComponent;
  let fixture: ComponentFixture<CapacityFactorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityFactorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityFactorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
