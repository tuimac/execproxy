import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuncommandComponent } from './runcommand.component';

describe('RuncommandComponent', () => {
  let component: RuncommandComponent;
  let fixture: ComponentFixture<RuncommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuncommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuncommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
