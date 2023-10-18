import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import jwt_decode from 'jwt-decode';
import {Auth} from "aws-amplify";
import {AlertService} from "../../share/services/alert.service";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private alertService: AlertService) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    try {
      await Auth.currentAuthenticatedUser();
      return true;
    }catch (e) {
      this.alertService.message('Your session is not confirm, please login.')
      await this.router.navigate(['/auth'])
      return false
    }

  }

}
