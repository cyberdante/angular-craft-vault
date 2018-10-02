import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationService } from '../services/notification/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private notification: NotificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // always allow navigation for now
    // return true;
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
