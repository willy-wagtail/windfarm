import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoIconComponent implements OnInit {

  @Input() classNames = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
