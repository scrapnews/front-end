import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Injectable} from "@angular/core";
/**
 * Created by DarkVision on 2017-03-26.
 */
@Injectable()
export class AuthGuard implements CanActivate{

  public allowed: boolean;

  constructor(private af: AngularFire, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.af.auth.subscribe((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/login']);
        this.allowed = false;
      } else {
        this.allowed = true;
      }
    })
    return this.allowed;
  }

}
