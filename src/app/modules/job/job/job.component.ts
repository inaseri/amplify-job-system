import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobFormComponent} from "../job-form/job-form.component";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  constructor(private matDialog: MatDialog) {
  }
  openJobForm(): void {
    this.matDialog.open(JobFormComponent, {width: '600px'})
  }
}
