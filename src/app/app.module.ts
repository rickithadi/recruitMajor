import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxEditorModule } from "ngx-editor";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



import {MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from "@angular/material/radio";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import {FormBuilder, FormGroup} from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";
import { FormComponent } from "./form/form.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { DraftComponent } from './draft/draft.component';

@NgModule({
  declarations: [AppComponent, FormComponent, DraftComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    MatGridListModule,
MatIconModule,
    AngularEditorModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxEditorModule,
    MatOptionModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
