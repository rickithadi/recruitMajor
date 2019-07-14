import { Component } from "@angular/core";
import { ParaGeneratorService } from "./para-generator.service";

import { ChangeDetectorRef, AfterContentChecked } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private p: ParaGeneratorService, private cd: ChangeDetectorRef) {}
  title = "recruitMajor";
}
