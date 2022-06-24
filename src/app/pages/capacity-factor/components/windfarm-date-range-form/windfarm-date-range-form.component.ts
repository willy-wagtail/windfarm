import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter, Subscription } from 'rxjs';

import { Windfarm } from 'src/app/models/windfarm';
import { CompletedWindfarmDateRangeForm, isCompletedForm, WindfarmDateRangeForm } from '../../models/windfarm-date-range-form';

@Component({
  selector: 'app-windfarm-date-range-form',
  templateUrl: './windfarm-date-range-form.component.html',
  styleUrls: ['./windfarm-date-range-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindfarmDateRangeFormComponent implements OnInit, OnDestroy {

  @Input() windfarmOptions: Windfarm[] = [];

  @Output() onChange: EventEmitter<CompletedWindfarmDateRangeForm> = new EventEmitter();

  @ViewChild('form', { static: true }) ngForm!: NgForm;

  windfarmDateRangeForm: WindfarmDateRangeForm = {
    windfarm: null,
    startDate: null,
    endDate: null
  };

  private formChangesSubscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.formChangesSubscription = this.ngForm
      .form
      .valueChanges
      .pipe(
        filter(isCompletedForm)
      )
      .subscribe(
        form => this.onChange.emit(form)
      )
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }
}
