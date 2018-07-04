import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {Observable} from 'rxjs';
import {MessageService} from "./messages.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Page} from "../model/page";
import {HOST} from "../constants";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
        catchError(this.messageService.handleError<Page<User>>('getUsers'))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersEndpoint}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.messageService.handleError<User>('getUser'))
      );
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.usersEndpoint}/email/${email}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.messageService.handleError<User>('getUser'))
      );
  }

  createUser(user: User): Observable<User> {
    let userTO = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    };

    return this.http.post<User>(this.usersEndpoint, userTO, httpOptions).pipe(
      catchError(this.messageService.handleError<User>('createUser'))
    );
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.usersEndpoint}/${user.id}`;
    return this.http.put(url, user, httpOptions).pipe(
      catchError(this.messageService.handleError<any>('updateUser'))
    );
  }

  deleteUser(user: User | number): Observable<any> {
    const id = (typeof user === 'number') ? user : user.id;
    const url = `${this.usersEndpoint}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      catchError(this.messageService.handleError<any>('deleteUser'))
    );
  }

}
