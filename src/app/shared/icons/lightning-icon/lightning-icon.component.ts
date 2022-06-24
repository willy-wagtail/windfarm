import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightning-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightning-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightningIconComponent implements OnInit {

  @Input() classNames = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
