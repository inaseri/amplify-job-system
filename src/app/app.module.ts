import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import { AuthenticatorComponent } from './modules/authenticator/authenticator.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ShareModule} from "./share/share.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    AmplifyAuthenticatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
