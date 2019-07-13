import { Component, OnInit } from "@angular/core";

import { ParaGeneratorService } from "../para-generator.service";
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
  constructor(private p: ParaGeneratorService) {
    this.p.genFirst();
  }
  vocations: Vocation[] = [
    { value: "", viewValue: "ASA", comd: false },
    { value: "", viewValue: "Log Spec", comd: true },
    { value: "", viewValue: "AO", comd: true },
    { value: "", viewValue: "CQ", comd: true },
    { value: "", viewValue: "Storeman", comd: false }
  ];

  model = new Hero("", "", "", "", "");
  appraisal = new Service(1, 4);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

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
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }


  ngOnInit() {}
}
