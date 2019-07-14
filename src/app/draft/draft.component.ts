import { Component, OnInit, Input } from "@angular/core";
import { ChangeDetectorRef, AfterContentChecked } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Hero } from "../hero";

import { SoldierService } from "../soldier.service";
import { ParaGeneratorService } from "../para-generator.service";
import { Service } from "../service";

@Component({
  selector: "app-draft",
  templateUrl: "./draft.component.html",
  styleUrls: ["./draft.component.css"]
})
export class DraftComponent implements OnInit {
  edit: boolean = false;
  draft: string = "";
  localCount: number = 0;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "",
    minHeight: "",
    placeholder: "Enter text here...",
    translate: "no"
    // uploadUrl: 'v1/images', // if needed
  };
  hero: Hero;
  app: Service;
  constructor(
    private p: ParaGeneratorService,
    private cd: ChangeDetectorRef,
    private ss: SoldierService
  ) {
    // this.hero(_hero);
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  tf(hero) {
    this.draft = this.p
      .genFirst(hero, this.localCount)
      .replace("RANK", hero.rank)
      .replace("SERVICEMAN", hero.name);
  }
  refresh(hero) {
    this.localCount = this.localCount + 1;
    if (this.localCount == 8) {
      this.localCount = 0;
    } else {
      this.draft = this.p.genFirst(this.hero, this.localCount);
    }
  }
  editT() {
    this.edit = !this.edit;
  }
  ngOnInit() {
    this.ss.currentMessage.subscribe(hero => (this.hero = hero));
    this.ss.currentApp.subscribe(app => (this.app = app));
    this.draft = this.p.genFirst(this.hero, this.localCount);
  }
}
