import {Injectable} from '@angular/core';
import {HOST, User} from "../model/user";
import {Observable} from 'rxjs';
import {MessageService} from "./messages.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";

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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersEndpoint)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersEndpoint}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>('getUser'))
      );
  }

  updateHero (user: User): Observable<any> {
    const url = `${this.usersEndpoint}/${user.id}`;
    return this.http.put(url, user, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
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
