import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "../component/user-list/user-list.component";
import {ApplicationListComponent} from "../component/application-list/application-list.component";
import {UserComponent} from "../component/user/user.component";

const routes: Routes = [
  { path: '', redirectTo: '/applist', pathMatch: 'full' },
  { path: 'userlist', component: UserListComponent },
  { path: 'applist', component: ApplicationListComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRouterModule { }
