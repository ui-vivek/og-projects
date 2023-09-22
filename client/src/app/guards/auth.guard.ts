import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state ) => {

  // return inject(AuthService).checkUser
  // const data="awef";
  // (route:ActivatedRouteSnapshot , state:RouterStateSnapshot)=>{
  //   return inject(AuthService).checkUser(data)
  // }

  return inject(AuthService).checkUser() ? true : false
};
