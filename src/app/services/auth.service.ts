import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders} from "angularfire2";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  islog : boolean;

  constructor( public af: AngularFire, private router: Router ) {
    this.af.auth.subscribe(
      auth => {
        if(auth) {
          this.islog = true;
          this.router.navigate(['/']);
        }else{
          this.islog = false;
          this.router.navigate(['/']);
        }
      }
    );
  }

  login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    })
  }

  logout() {
    this.af.auth.logout();
  }

  isAuthenticate(){
    return this.islog;
  }


  private _getProvider(from: string) {
    switch(from){
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
    }
  }

}
