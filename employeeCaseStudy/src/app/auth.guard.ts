
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { LoginState } from './modules/core/store/reducers/login.reducers';
import { isLogged } from './modules/core/store/selectors/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginStore: Store<LoginState>,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | boolean
    | UrlTree
    | Observable<boolean| UrlTree>
    | Promise<boolean | UrlTree> {
    return this.loginStore.select(isLogged).pipe(
      map((isLogged) => {
        if(!isLogged){
          return this.router.createUrlTree(['core','login']);
        }
        return true;
      })
    );
  }
}
