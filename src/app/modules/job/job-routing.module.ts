import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {JobComponent} from "./job/job.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {
}
