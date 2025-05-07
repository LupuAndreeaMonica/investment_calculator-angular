import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";

import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
