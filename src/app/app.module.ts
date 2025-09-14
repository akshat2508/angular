import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
    NgSwitch, 
    NgSwitchCase,
    NgSwitchDefault
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
