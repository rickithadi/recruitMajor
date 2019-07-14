import { Component, OnInit, Input } from "@angular/core";
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
  @Input() hero: Hero;
  private _hero;
  set hero(hero: Hero) {
    this._hero = hero;
    // this.valueChange.emit(this._model);
  }
  get hero() {
    this.tf(this._hero);
    return this._hero;
  }
  draft: string;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "50rem",
    minHeight: "25rem",
    placeholder: "Enter text here...",
    translate: "no"
    // uploadUrl: 'v1/images', // if needed
  };
  constructor(private p: ParaGeneratorService) {}

  tf(hero) {
    this.draft = JSON.stringify(hero);
    this.p.genFirst(hero);
  }
  ngOnInit() {}
}
