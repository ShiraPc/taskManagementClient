import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './moduls/login-module/sign-in/sign-in.component';
import { EntryComponent } from './moduls/login-module/entry/entry.component';
import { DailyComponent } from './moduls/calendar-module/daily/daily.component';
import { WeeklyComponent } from './moduls/calendar-module/weekly/weekly.component';
import { AddTaskComponent } from './moduls/task-module/add-task/add-task.component';
import { UpdateTaskComponent } from './moduls/task-module/update-task/update-task.component';
import { DeleteTaskComponent } from './moduls/task-module/delete-task/delete-task.component';
import { DisplayTaskComponent } from './moduls/task-module/display-task/display-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    EntryComponent,
    DailyComponent,
    WeeklyComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    DisplayTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
