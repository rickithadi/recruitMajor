import { Component, OnInit,Input } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Hero} from '../hero';

import {Service} from '../service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  @Input() appraisal: Service;
  @Input() hero: Hero;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50rem',
    minHeight: '25rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    // uploadUrl: 'v1/images', // if needed
  };

  constructor() { }

  ngOnInit() {
  }

}
