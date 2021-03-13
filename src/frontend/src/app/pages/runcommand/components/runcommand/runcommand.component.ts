import { Component, OnInit } from '@angular/core';
import { RuncommandService } from '../../services';
import { Runcommand } from '../../models';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-runcommand',
  templateUrl: './runcommand.component.html',
  styleUrls: ['./runcommand.component.css']
})
export class RuncommandComponent implements OnInit {

  public runcommandSubject: Subject<string> = new Subject();
  public result$: Observable<Runcommand>;

  constructor(private runcommandService: RuncommandService) { }

  ngOnInit(): void {
  }

  runCommand(command: string) {
    this.runcommandSubject.next(command);
  }
}
