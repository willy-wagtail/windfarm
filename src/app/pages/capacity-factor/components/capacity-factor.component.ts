import { Component, OnInit } from '@angular/core';
import { Windfarm } from 'src/app/models/windfarm';
import { WindfarmHttpService } from 'src/app/services/http/windfarm-http.service';

@Component({
  selector: 'app-capacity-factor',
  templateUrl: './capacity-factor.component.html',
  styleUrls: ['./capacity-factor.component.scss']
})
export class CapacityFactorComponent implements OnInit {

  windfarms: Windfarm[] = [];

  constructor(private windfarmHttpService: WindfarmHttpService) { }

  ngOnInit(): void {
    this.windfarmHttpService
      .getAllWindfarms$()
      .subscribe(
        {
          next: wfs => this.windfarms = wfs,
          error: e => console.error(e), // todo: handle loading issues
        }
      )
  }
}
