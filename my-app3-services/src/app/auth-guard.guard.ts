import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard Guard is called e faccio dei controlli');
  
  //Questa authGuardGuard non è una classe mauna funziona quindi devo fare la dependency injectio a mano
  const authService = inject(AuthorizationService);
  const router = inject(Router);

  console.log("Sto accedendo alla seguente rotta: " + route['url']);
  console.log(state);
  
  if(authService.checkRole()){
    //con questo return true accedo alla rotta
    return true;
  }else{
    console.log("Spice, non sei autorizzato");
    //lo rimbalzo alla home
    
    return router.navigate(['/no-auth']);
  }
  
  
};
