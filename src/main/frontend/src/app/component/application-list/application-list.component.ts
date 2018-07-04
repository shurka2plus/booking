import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../service/application.service";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource, PageEvent} from "@angular/material";
import {Application} from "../../model/application";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  totalLength = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  currentUserId = null;

  appDataSource = new MatTableDataSource<Application>();


  selection = new SelectionModel<Application>(false, []);
  displayedColumns = ['select', 'id', 'name', 'type', 'contentTypes', 'userId'];

  constructor(private appService: ApplicationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadApps();
  }

  loadApps(): void {
    this.appService.getApps(this.pageIndex, this.pageSize, this.auth(['ROLE_PUBLISHER']))
      .subscribe(page => {
        this.appDataSource.data = page.content;
        this.pageSize = page.pageable.pageSize;
        this.pageIndex = page.pageable.pageNumber;
        this.totalLength = page.totalElements;
      });
    this.currentUserId = this.authService.principal.id;
  }

  deleteApp(app: Application) {
    this.appService.deleteApp(app)
      .subscribe(() => {
        this.selection.clear();
        this.loadApps();
      });
  }

  onPageChange(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadApps();
  }

  auth(roles : string[] = undefined){
    return this.authService.auth(roles);
  }

}
