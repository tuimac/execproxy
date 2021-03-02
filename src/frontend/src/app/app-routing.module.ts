import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuncommandComponent } from './runcommand/runcommand.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'runcommand',
    component: RuncommandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
