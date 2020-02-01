import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {

    console.log("Pasa por el GUARD")
    return Math.random() > 0.5 ? true : this.router.navigate(["error"]);
  }

}
