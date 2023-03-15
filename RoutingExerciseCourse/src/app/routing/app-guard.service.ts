import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AppGuardService implements CanActivate, CanActivateChild {
  prova: boolean = false;
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    /* if (this.prova) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
 */
    return this.authService.isAuthenticatd().then((authenticated: boolean) => {
        console.log(authenticated);
      if (authenticated) {
        return true;
      } else {
        this.route.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  } 
}
