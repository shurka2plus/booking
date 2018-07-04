import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Application} from "../../model/application";
import {ApplicationService} from "../../service/application.service";
import {MessageService} from "../../service/messages.service";
import {APP_TYPES, CONTENT_TYPES} from "../../constants";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  appTypes = APP_TYPES;
  contentTypes = CONTENT_TYPES;

  app: Application = {
    id: null,
    name: "",
    type: null,
    contentTypes: [],
    userId: null
  };

  isNew: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private appService: ApplicationService,
    private messageService: MessageService,
    private location: Location,
    private router: Router
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
    this.messageService.clear();
    this.appService.updateApp(this.app)
      .subscribe(() => {
        if(this.messageService.messages.length === 0)
          this.goBack();
      });
  }

  create(): void {
    this.messageService.clear();
    this.appService.createApp(this.app)
      .subscribe(() => {
        if(this.messageService.messages.length === 0)
          this.router.navigateByUrl('/applist')
      });
  }

}
