import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../service/application.service";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource, PageEvent} from "@angular/material";
import {Application} from "../../model/application";

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

  appDataSource = new MatTableDataSource<Application>();


  selection = new SelectionModel<Application>(false, []);
  displayedColumns = ['select', 'id', 'name', 'type', 'contentTypes', 'userId'];

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.loadApps();
  }

  loadApps(): void {
    this.appService.getApps(this.pageIndex, this.pageSize)
      .subscribe(page => {
        this.appDataSource.data = page.content;
        this.pageSize = page.pageable.pageSize;
        this.pageIndex = page.pageable.pageNumber;
        this.totalLength = page.totalElements;
      });
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
}
