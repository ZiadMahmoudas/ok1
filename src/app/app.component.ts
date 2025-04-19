import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro';
  constructor(public loadingService:LoaderService,public auth:AuthService){}
  // obj={
  //   name:"omar",
  //   age:26
  // }
  // currentDate:Date = new Date();
  // arr = ["omar","Mazen"]
}
