import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = route.paramMap.get('userId');
    return this.authService.fetchAuthState$().pipe(
      tap((user) => {
        if (!user) {
          this.router.navigate(['/']);
        }
        if (!userId) {
          this.router.navigate(['/']);
        }
        if (userId !== user?.uid) {
          this.router.navigate(['/']);
        }
      }),
      map((user) => !!user && userId === user?.uid)
    );
  }
}
