import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDemoComponent } from './table-demo/table-demo.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule
    ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




