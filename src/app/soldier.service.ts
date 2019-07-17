import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Service } from "./service";
import { Hero } from "./hero";
@Injectable({
  providedIn: "root"
})
export class SoldierService {
  model = new Hero("", "", "", "", "");
    appraisal = new Service(0, 0, {}, {}, {}, {}, {});
  private messageSource = new BehaviorSubject(this.model);
  currentMessage = this.messageSource.asObservable();

  private appSource = new BehaviorSubject(this.appraisal);
  currentApp = this.appSource.asObservable();

  constructor() {}

  changeMessage(message: Hero) {
    console.log("message changing", message);
    this.messageSource.next(message);
  }
  changeApp(app: Service) {
    console.log("apps changing", app);
    this.appSource.next(app);
  }
}
