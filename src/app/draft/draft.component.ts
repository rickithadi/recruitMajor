import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '25rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    // uploadUrl: 'v1/images', // if needed
  };

  constructor() { }

  ngOnInit() {
  }

}
