import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningIconComponent } from './lightning-icon.component';

describe('LightningIconComponent', () => {
  let component: LightningIconComponent;
  let fixture: ComponentFixture<LightningIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LightningIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightningIconComponent);
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
