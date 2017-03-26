import {Routes, RouterModule} from "@angular/router";
import {ScrapLoginComponent} from "./scrap-login/scrap-login.component";
import {SupportComponent} from "./support/support.component";
import {AuthGuard} from "./guard/AuthGuard";

const APP_ROUTES: Routes = [
  {path: '', redirectTo:'/', pathMatch:'full'},
  {path: 'support', component: SupportComponent, canActivate: [AuthGuard]},
  {path: 'login', component: ScrapLoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
