import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Application} from "../../model/application";
import {ApplicationService} from "../../service/application.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  appTypes = {
    ANDROID: 'Android app',
    IOS: 'iOS app',
    WEBSITE: 'Website'
  };

  contentTypes = {
    IMAGE: 'Image',
    VIDEO: 'Video',
    HTML: 'HTML'
  };

  app: Application = {
    id: 0,
    name: "",
    type: "",
    contentTypes: [],
    userId: 0
  };
  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private appService: ApplicationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getApp();
  }

  getApp(): void {
    if(this.route.snapshot.url[1].path === 'new') {
      this.isNew = true;
      this.app.userId = +this.route.snapshot.paramMap.get('userId');
    }
    else {
      let id = this.route.snapshot.paramMap.get('id');
      this.appService.getApp(+id)
        .subscribe(app => this.app = app);
    }
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.appService.updateApp(this.app)
      .subscribe(() => this.goBack());
  }

  create(): void {
    this.appService.createApp(this.app, this.app.userId)
      .subscribe(() => this.goBack());
  }

}
