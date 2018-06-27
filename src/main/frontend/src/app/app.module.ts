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
import {MatCheckboxModule, MatPaginatorModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

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
    BrowserAnimationsModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
