import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobFormComponent} from "../job-form/job-form.component";
import {API} from "aws-amplify";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: any;

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getJobs();
  }

  openJobForm(): void {
    this.matDialog.open(JobFormComponent, {width: '600px'})
  }

  getJobs() {
    API.get('job', '/job', {}).then(result => {
      this.jobs = result;
    });
  }

  deleteJob(sortKey: string): void {
    API.del('job', `/job/${sortKey}/JOB`, {}).then(result => {
      this.getJobs();
    })
  }
}
