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
  @Input() hero: Hero;
  set hero(hero: Hero) {
    // this.tf(hero);
    this._hero = hero;
    // this.valueChange.emit(this._model);
  }
  get hero() {
    this.tf(this._hero);
    return this._hero;
  }
  draft: string = "";

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "50rem",
    minHeight: "25rem",
    placeholder: "Enter text here...",
    translate: "no"
    // uploadUrl: 'v1/images', // if needed
  };
  constructor(private p: ParaGeneratorService, private cd: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  tf(hero) {
    // this.draft = JSON.stringify(hero);

    console.log(this.draft);
    this.draft = this.p.genFirst(hero);
    console.log(this.draft);
  }
  ngOnInit() {}
}
