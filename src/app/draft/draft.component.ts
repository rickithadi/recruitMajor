import { Component, OnInit, Input } from "@angular/core";
import { ChangeDetectorRef, AfterContentChecked } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Hero } from "../hero";

import { ParaGeneratorService } from "../para-generator.service";
import { Service } from "../service";

@Component({
  selector: "app-draft",
  templateUrl: "./draft.component.html",
  styleUrls: ["./draft.component.css"]
})
export class DraftComponent implements OnInit {
  @Input() appraisal: Service;
  edit: boolean = false;
  @Input() hero: Hero;
  private _hero: Hero;
  set hero(hero: Hero) {
    this._hero = hero;
  }
  get hero() {
    this.tf(this._hero);
    return this._hero;
  }
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
  constructor(private p: ParaGeneratorService, private cd: ChangeDetectorRef) {
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
    }
    //might have to recall
  }

  editT() {
    this.edit = !this.edit;
  }

  ngOnInit() {}
}
