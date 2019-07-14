import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Service } from "./service";
import { Hero } from "./hero";
@Injectable({
  providedIn: "root"
})
export class SoldierService {
  model = new Hero("", "", "", "", "");
  private messageSource = new BehaviorSubject(this.model);
  currentMessage = this.messageSource.asObservable();
  constructor() {}

  changeMessage(message: Hero) {
	  console.log('shits changing')
    this.messageSource.next(message);
  }
}
