import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobComponent} from './job/job.component';
import {JobRoutingModule} from "./job-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {JobFormComponent} from './job-form/job-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [
    JobComponent,
    JobFormComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: []
})
export class JobModule {
}
