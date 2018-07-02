import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {User} from '../../model/user';
import {UserService} from "../../service/user.service";
import {MessageService} from "../../service/messages.service";

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
    id: null,
    name: "",
    email: "",
    password: "",
    role: null
  };

  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService,
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
    this.messageService.clear();
    this.userService.updateUser(this.user)
      .subscribe(() => {
        if(this.messageService.messages.length === 0)
          this.goBack();
      });
  }

  create(): void {
    this.messageService.clear();
    this.userService.createUser(this.user)
      .subscribe(() => {
        if(this.messageService.messages.length === 0)
          this.goBack();
      });
  }
}
