import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // return inject(AuthService).checkUser() ? true : router.navigate(['sign-in']);
  if (inject(AuthService).checkUser()) {
    return true;
  } else {
    router.navigate(['sign-in']);
    return false;
  }
};
