import { Component, OnInit } from '@angular/core';
import { RuncommandService } from '../../services';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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
    this.result$ = this.runcommandSubject.pipe(
      debounceTime(0),
      distinctUntilChanged(),
      switchMap((command: string) => this.runcommandService.runCommand(command))
    );
  }

  runCommand(command: string) {
    if(!command) { return; }
    this.runcommandSubject.next(command);
    console.log(command);
  }
}
