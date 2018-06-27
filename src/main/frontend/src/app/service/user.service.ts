import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {Observable} from 'rxjs';
import {MessageService} from "./messages.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {Page} from "../model/page";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export const HOST: string = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersEndpoint = HOST + 'api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getUsers(page = 0, size = 5): Observable<Page<User>> {
    return this.http.get<Page<User>>(this.usersEndpoint,{
        params: new HttpParams()
          .set('page', page.toString())
          .set('size', size.toString())
      })
      .pipe(
        catchError(this.handleError<Page<User>>('getUsers'))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersEndpoint}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>('getUser'))
      );
  }

  createUser(user: User): Observable<User> {
    let userTO = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    }

    return this.http.post<User>(this.usersEndpoint, userTO, httpOptions).pipe(
      catchError(this.handleError<User>('createUser'))
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.usersEndpoint}/${user.id}`;
    return this.http.put(url, user, httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersEndpoint}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private showError(message: string) {
    this.messageService.add(`UserService:  ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.showError(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
