import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserComponent } from './component/user/user.component';
import { MessagesComponent } from './component/messages/messages.component';
import {AppRouterModule} from "./app-router/app-router.module";
import { ApplicationComponent } from './component/application/application.component';
import { ApplicationListComponent } from './component/application-list/application-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    MessagesComponent,
    ApplicationComponent,
    ApplicationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
