import {NgModule} from '@angular/core';
import {AlertService} from './services/alert.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  providers: [
    AlertService,
  ],
  imports: [
    MatSnackBarModule,
  ],
})
export class ShareModule {
}
