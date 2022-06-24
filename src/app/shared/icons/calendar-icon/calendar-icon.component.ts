import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarIconComponent implements OnInit {

  @Input() classNames = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
