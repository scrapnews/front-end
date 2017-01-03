import {Routes, RouterModule} from "@angular/router";
import {ScrapLoginComponent} from "./scrap-login/scrap-login.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo:'/', pathMatch:'full'},
  {path: 'login', component: ScrapLoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
