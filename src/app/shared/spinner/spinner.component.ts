import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() size: 'xs' | 's' | 'm' | 'lg' = 'm';

  constructor() { }

  ngOnInit(): void {
  }

  get sizeClasses(): string {
    switch (this.size) {
      case 'xs':
        return 'h-4 w-4';

      case 's':
        return 'h-6 w-6';

      case 'm':
        return 'h-8 w-8';

      case 'lg':
        return 'h-10 w-10';
    }
  }

}
