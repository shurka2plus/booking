import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (errorResponse: any): Observable<T> => {

      console.error(errorResponse);


      this.add(`Operation ${operation} failed.`);

      this.add("Details:");

      const error = errorResponse.error;

      if(error) {
        if (typeof error.errors !== 'undefined' && error.errors.length > 0)
          error.errors.forEach(
            (elem) => this.add(`${elem.field} ${elem.defaultMessage}`)
          );
        else
          this.add(error.message);
      } else
        this.add(errorResponse.message);

      return of(result as T);
    };
  }
}
