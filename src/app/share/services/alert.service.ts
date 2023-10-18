import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  defaultDuration = 5000;

  constructor(private snackBar: MatSnackBar) {
  }

  message(msg: string, action?: string): void {
    this.snackBar.open(msg, action, {
      duration: this.defaultDuration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snack-bar-success'],
    });
  }

  messageObserve(msg: string, action?: string): Observable<any> {
    return this.snackBar
      .open(msg, action, {
        duration: this.defaultDuration,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['snack-bar-success'],
      })
      .afterDismissed();
  }
}
