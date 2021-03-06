import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "../component/user-list/user-list.component";
import {ApplicationListComponent} from "../component/application-list/application-list.component";
import {UserComponent} from "../component/user/user.component";
import {ApplicationComponent} from "../component/application/application.component";
import {LoginComponent} from "../component/login/login.component";

const routes: Routes = [
  { path: 'userlist', component: UserListComponent },
  { path: 'applist', component: ApplicationListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/new', component: UserComponent },
  { path: 'user/current', component: UserComponent },
  { path: 'application/:id', component: ApplicationComponent },
  { path: 'application/new/:userId', component: ApplicationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRouterModule { }
