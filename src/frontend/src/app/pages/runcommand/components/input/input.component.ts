import { Component, OnInit } from '@angular/core';
import { RuncommandService } from '../../services';
import { Runcommand } from '../../models';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public runcommandSubject: Subject<Runcommand> = new Subject();
  public result$: Observable<Runcommand>;

  constructor(private runcommandService: RuncommandService) { }

  ngOnInit(): void {
    this.
  }

  runCommand(command: string) {
    this.runcommandSubject.next(command);
  }
}
