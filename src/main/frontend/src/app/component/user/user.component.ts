import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {User} from '../../model/user';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRoles = [
    {name: 'PUBLISHER', value: 'Publisher'},
    {name: 'ADOPS', value: 'Operator'},
    {name: 'ADMIN', value: 'Administrator'}
  ];

  user: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    role: ""
  };
  isNew: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    if(this.route.snapshot.url[1].path === 'new')
      this.isNew = true;
    else {
      let id = this.route.snapshot.paramMap.get('id');
      this.userService.getUser(+id)
        .subscribe(user => this.user = user);
    }
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

  create(): void {
    this.userService.createUser(this.user)
      .subscribe(() => this.goBack());
  }
}
