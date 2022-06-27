import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getMockWindfarmArray } from 'src/app/mocks/windfarm';
import { Windfarm } from 'src/app/models/windfarm';
import { CapacityFactorPageService } from 'src/app/services/ui/capacity-factor-page/capacity-factor-page.service';

import { CapacityFactorComponent } from './capacity-factor.component';

@Component({
    selector: 'app-info-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<div class="info-icon">Mock Info Icon</div>`
})
class MockInfoIconComponent {
}


@Component({
    selector: 'app-windfarm-date-range-form',
    template: `<div class="form">Mock Form</div>`
})
class MockWindfarmDateRangeFormComponent {
    @Input() windfarmOptions?: Windfarm[];
}

describe('CapacityFactorComponent', () => {

    let mockWindfarms: Windfarm[];
    let capacityFactorPageServiceSpy: jasmine.SpyObj<CapacityFactorPageService>;

    let component: CapacityFactorComponent;
    let fixture: ComponentFixture<CapacityFactorComponent>;

    beforeEach(() => {
         capacityFactorPageServiceSpy = jasmine.createSpyObj(
            'CapacityFactorPageService',
            ['getAllWindfarms$', 'getCapacityFactorTableRows$']
        );
    
        mockWindfarms = getMockWindfarmArray();

        capacityFactorPageServiceSpy
            .getAllWindfarms$
            .and
            .returnValue(of(mockWindfarms));

    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CapacityFactorComponent,
                MockWindfarmDateRangeFormComponent
            ],
            imports: [
                MockInfoIconComponent
            ],
            providers: [
                {
                    provide: CapacityFactorPageService,
                    useValue: capacityFactorPageServiceSpy
                }
            ]
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
