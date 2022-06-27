import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DateService } from 'src/app/services/date/date.service';

import { WindfarmDateRangeFormComponent } from './windfarm-date-range-form.component';

@Component({
    selector: 'app-calendar-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="calendar-icon">Mock Calendar Icon</div>`
})
class MockCalendarIconComponent {
}


describe('WindfarmDateRangeComponent', () => {

    let dateServiceSpy: jasmine.SpyObj<DateService>;

    let component: WindfarmDateRangeFormComponent;
    let fixture: ComponentFixture<WindfarmDateRangeFormComponent>;

    beforeEach(() => {
        dateServiceSpy = jasmine.createSpyObj(
            'DateService',
            ['getISODate']
        );
    })

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WindfarmDateRangeFormComponent],
            imports: [
                FormsModule,
                MockCalendarIconComponent
            ],
            providers: [
                {
                    provide: DateService,
                    useValue: dateServiceSpy
                }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WindfarmDateRangeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
