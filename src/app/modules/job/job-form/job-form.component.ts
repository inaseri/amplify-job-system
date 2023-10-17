import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {API} from "aws-amplify";

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  jobForm!: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<JobFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
    })
  }

  async submit() {
    const result = await API.post('job', '/job', {body: this.jobForm.value})
    console.log(result)
  }
}
