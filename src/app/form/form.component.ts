import { Component, OnInit } from "@angular/core";

import { ParaGeneratorService } from "../para-generator.service";
import { SoldierService } from "../soldier.service";
import { Hero } from "../hero";
import { Service } from "../service";
export interface Vocation {
  value: string;
  comd: boolean;
  viewValue: string;
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  hero: Hero;
  app: Service;
  constructor(private p: ParaGeneratorService, private ss: SoldierService) {
    // this.p.genFirst();
  }
  vocations: Vocation[] = [
    { value: "", viewValue: "ASA", comd: false },
    { value: "", viewValue: "Log Spec", comd: true },
    { value: "", viewValue: "AO", comd: true },
    { value: "", viewValue: "CQ", comd: true },
    { value: "", viewValue: "Storeman", comd: false }
  ];

  model = new Hero("", "", "", "", "");
  appraisal = new Service(0, 0);

  submitted = false;

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  get diagnosticA() {
    return JSON.stringify(this.appraisal);
  }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  ngOnInit() {
    this.ss.currentMessage.subscribe(hero => (this.hero = hero));
    console.log(this.hero);
    this.ss.currentApp.subscribe(app => (this.app = app));
    console.log(this.app);
  }
  onSubmit(model) {
    this.ss.changeMessage(model);
    this.model = new Hero("", "", "", "", "");
  }
  onAppraisalSubmit(app) {
    this.ss.changeApp(app);
    this.appraisal = new Service(0, 0);
  }
}
