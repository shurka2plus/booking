import { Injectable } from '@angular/core';
import {MessageService} from "./messages.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Page} from "../model/page";
import {of} from "rxjs/internal/observable/of";
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
        catchError(this.handleError<Page<Application>>('getApps'))
      );
  }

  getApp(id: number): Observable<Application> {
    const url = `${this.appsEndpoint}/${id}`;
    return this.http.get<Application>(url)
      .pipe(
        catchError(this.handleError<Application>('getApplication'))
      );
  }

  createApp(app: Application, userId: number): Observable<Application> {
    let appTO = {
      name: app.name,
      type: app.type,
      contentTypes: app.contentTypes
    };

    const url = `${this.usersEndpoint}/${userId}/apps`;
    return this.http.post<Application>(url, appTO, httpOptions).pipe(
      catchError(this.handleError<Application>('createApp'))
    );
  }

  updateApp(app: Application): Observable<any> {
    const url = `${this.usersEndpoint}/${app.userId}/apps/${app.id}`;
    return this.http.put(url, app, httpOptions).pipe(
      catchError(this.handleError<any>('updateApp'))
    );
  }

  deleteApp(app: Application): Observable<any> {
    const url = `${this.usersEndpoint}/${app.userId}/apps/${app.id}`;
    return this.http.delete<any>(url, httpOptions).pipe(
      catchError(this.handleError<any>('deleteApp'))
    );
  }

  private showError(message: string) {
    this.messageService.add(`AppService:  ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.showError(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
