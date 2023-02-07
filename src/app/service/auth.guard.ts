import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  message: string = "";

  constructor(
    public authService: AuthService,
    public router: Router,
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggedIn !== true) {
      this.message = "Nincs jogosultságod az oldal megtekintésére!"
      alert(this.message);
      this.router.navigate(['home'])
    }
    
    return true;
  } 
}
