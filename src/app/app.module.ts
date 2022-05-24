import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './moduls/login-module/sign-in/sign-in.component';
import { EntryComponent } from './moduls/login-module/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
