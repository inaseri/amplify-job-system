import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./core/layout/app-layout/app-layout.component";
import {AuthenticatorComponent} from "./modules/authenticator/authenticator.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    component: AppLayoutComponent,
  },
  {
    path: 'job',
    loadChildren: () => import('./modules/job/job.module').then((m) => m.JobModule),
    component: AppLayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthenticatorComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
