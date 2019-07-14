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
  private _hero;
  edit: boolean = false;
  @Input() hero: Hero;
  set hero(hero: Hero) {
    this._hero = hero;
  }
  get hero() {
    this.tf(this._hero);
    return this._hero;
  }
  draft: string = "";
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "",
    minHeight: "",
    placeholder: "Enter text here...",
    translate: "no"
    // uploadUrl: 'v1/images', // if needed
  };
  constructor(private p: ParaGeneratorService, private cd: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  onChange(event) {
    console.log("event hing", event);
  }
  tf(hero) {
    this.draft = this.p.genFirst(hero);
    console.log(this.draft);
  }
  editT() {
    this.edit = true;
  }
  editF() {
    this.edit = false;
  }

  ngOnInit() {}
}
