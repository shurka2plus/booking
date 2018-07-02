import { Injectable } from '@angular/core';
import {MessageService} from "./messages.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Page} from "../model/page";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/operators";
import {Application} from "../model/application";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export const HOST: string = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private appsEndpoint = HOST + 'api/apps';
  private usersEndpoint = HOST + 'api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getApps(page = 0, size = 5): Observable<Page<Application>> {
    return this.http.get<Page<Application>>(this.appsEndpoint,{
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    })
      .pipe(
        catchError(this.messageService.handleError<Page<Application>>('getApps'))
      );
  }

  getApp(id: number): Observable<Application> {
    const url = `${this.appsEndpoint}/${id}`;
    return this.http.get<Application>(url)
      .pipe(
        catchError(this.messageService.handleError<Application>('getApplication'))
      );
  }

  createApp(app: Application): Observable<Application> {
    let appTO = {
      name: app.name,
      type: app.type,
      contentTypes: app.contentTypes
    };

    const url = `${this.usersEndpoint}/${app.userId}/apps`;
    return this.http.post<Application>(url, appTO, httpOptions).pipe(
      catchError(this.messageService.handleError<Application>('createApp'))
    );
  }

  updateApp(app: Application): Observable<any> {
    let appTO = {
      id: app.id,
      name: app.name,
      type: app.type,
      contentTypes: app.contentTypes
    };
    const url = `${this.usersEndpoint}/${app.userId}/apps/${app.id}`;
    return this.http.put(url, appTO, httpOptions).pipe(
      catchError(this.messageService.handleError<any>('updateApp'))
    );
  }

  deleteApp(app: Application): Observable<any> {
    const url = `${this.usersEndpoint}/${app.userId}/apps/${app.id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.messageService.handleError<any>('deleteApp'))
    );
  }
}
