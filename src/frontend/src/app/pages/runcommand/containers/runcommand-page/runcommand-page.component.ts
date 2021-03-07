import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RuncommandService } from '../../services';

@Component({
  selector: 'app-runcommand-page',
  templateUrl: './runcommand-page.component.html',
  styleUrls: ['./runcommand-page.component.scss']
})
export class RuncommandPageComponent {
  public dailyLineChartData$: Observable<any>;

  constructor(private service: RuncommandService) {
    //this.dailyLineChartData$ = this.service.loadDailyLineChartData();
  }
}
