import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Booking Tool';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(!this.authService.authenticated)
      this.router.navigateByUrl('/login')
  }

  logout() {
    this.authService.logout().subscribe(
      () => this.router.navigateByUrl('/login')
    );
  }

  auth(roles : string[] = undefined){
    return this.authService.auth(roles);
  }
}
