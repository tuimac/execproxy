import { Component, OnInit } from '@angular/core';
import { Runcommand } from '../../models';
import { Subject, Observable } from 'rxjs';
import { RuncommandService } from '../../services';

@Component({
  selector: 'app-runcommand',
  templateUrl: './runcommand.component.html',
  styleUrls: ['./runcommand.component.css']
})
export class RuncommandComponent implements OnInit {

  public runcommandSubject: Subject<string> = new Subject();
  public result: Runcommand;

  constructor(private runcommandService: RuncommandService) { }

  ngOnInit(): void {
  }

  runCommand(command: string): void {
    if(!command) { return; }
    this.runcommandService.runCommand(command)
      .subscribe(data => this.result = data);
  }
}
