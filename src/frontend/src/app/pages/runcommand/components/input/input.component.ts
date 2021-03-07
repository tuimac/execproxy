import { Component, OnInit } from '@angular/core';
import { RuncommandService } from '../../services';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private runcommandService: RuncommandService) { }

  ngOnInit(): void {
  }

  runCommand(command: string) {
    this.runCommand.next(command);
  }
}
