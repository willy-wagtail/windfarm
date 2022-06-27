import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclamationIconComponent } from './exclamation-icon.component';

describe('ExclamationIconComponent', () => {
  let component: ExclamationIconComponent;
  let fixture: ComponentFixture<ExclamationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExclamationIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclamationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default classNames', () => {
    expect(component.classNames).toBe('h-6 w-6');
  });
});
