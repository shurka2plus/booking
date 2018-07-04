import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {HOST} from "../constants";
import {Principal} from "../model/principal";
import {UserService} from "./user.service";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  principal : Principal = {
    id: null,
    username : "",
    roles : []
  };

  constructor(private http: HttpClient, private userSerice: UserService) { }

  authenticate(credentials, callback) : Observable<any> {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.get(HOST+'authenticate', {headers: headers})
      .pipe(
        tap((response) => {
          if (response['name']) {
            this.authenticated = true;
            this.populatePrincipal(response, callback);
        } else {
            this.authenticated = false;
          this.clearPrincipal();
        }})
      );
  }

  logout() {
    return this.http.post(HOST+'logout', {}).pipe(
      tap(() => {
        this.authenticated = false;
        this.clearPrincipal();
      })
    );
  }

  private populatePrincipal(response, callback) {
    this.principal.username = response['name'];

    const authorities = response['authorities'];
    if(authorities && Array.isArray(authorities))
      authorities.forEach(auth => this.principal.roles.push(auth['authority']));

    this.userSerice.getUserByEmail(this.principal.username).subscribe(
      user => { this.principal.id = user.id; return callback && callback();},
      error => console.log(error)
    )
  }

  private clearPrincipal() {
    this.principal.id = null;
    this.principal.username = "";
    this.principal.roles = [];
  }

  public auth(roles: string[]): boolean {
    if(!this.authenticated)
      return false;

    if(roles === undefined)
      return true;

    for (let requestedRole of roles)
      for (let principalRole of this.principal.roles)
        if (principalRole === requestedRole)
          return true;

    return false;
  }
}
