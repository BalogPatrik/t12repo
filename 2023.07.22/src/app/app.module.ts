import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DolgozokComponent } from './dolgozok/dolgozok.component';
import { FormsModule } from '@angular/forms';
import { EuComponent } from './eu/eu.component';
import { F1Component } from './f1/f1.component';
import { FifaComponent } from './fifa/fifa.component';
import { SnookerComponent } from './snooker/snooker.component';

@NgModule({
  declarations: [
    AppComponent,
    DolgozokComponent,
    EuComponent,
    F1Component,
    FifaComponent,
    SnookerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
