import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exclamation-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exclamation-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExclamationIconComponent implements OnInit {

  @Input() classNames = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
