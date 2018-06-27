import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {MatTableDataSource, PageEvent} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  totalLength = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  userDataSource = new MatTableDataSource<User>();


  selection = new SelectionModel<User>(false, []);
  displayedColumns = ['select', 'id', 'name', 'email', 'role'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.pageIndex, this.pageSize)
      .subscribe(page => {
        this.userDataSource.data = page.content;
        this.pageSize = page.pageable.pageSize;
        this.pageIndex = page.pageable.pageNumber;
        this.totalLength = page.totalElements;
      });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user)
      .subscribe(() => {
        this.selection.clear();
        this.loadUsers();
      });
  }

  onPageChange(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadUsers();
  }
}
