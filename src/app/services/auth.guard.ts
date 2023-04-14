import { UtilityServiceService } from './utility-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth-services.service";
import { ERRORMSG } from '../brand-constant/label';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  errorMsg = ERRORMSG
  constructor(
    private authService: AuthService,
    private router: Router,
    private utilityService: UtilityServiceService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.getAuthStatus();
    if (!isAuthenticated) {
        this.router.navigate(['/']);
        this.utilityService.simpleToast('top', this.errorMsg.INVALID_LOGIN_MESSAGE)
    }  
    return isAuthenticated;
}

canLoad(route: Route): boolean {
  let url: string = 'normal-user';
  if (url != 'super-user') {
    this.utilityService.simpleToast('top', ERRORMSG.NOTELIGIBLE)
    return false;
  }  
  return true; 
}
  
}
