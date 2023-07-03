import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { CanDeactivateFn } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService 
    , private router : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedAuthenticationService.isUserLoggedIn())

    return true;

    this.router.navigate(['login'])

    return false;



   
  }


}
