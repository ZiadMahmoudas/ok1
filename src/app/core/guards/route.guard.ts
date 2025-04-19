import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const routeGuard: CanMatchFn = (route, segments) => {
   let  auth = inject(AuthService)
     let router = inject(Router)

     if (auth.getToken()) {
       router.navigateByUrl("Home");
       return false;
     }
     else{
       return true;
     }
};
