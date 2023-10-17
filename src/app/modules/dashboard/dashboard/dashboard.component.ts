import {Component, OnInit} from '@angular/core';
import {API} from "aws-amplify";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobs: any;

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs() {
    API.get('job', '/job', {}).then(result => {
      this.jobs = result;
    });
  }

}
