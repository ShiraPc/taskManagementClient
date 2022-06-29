import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module'
import { EntryComponent } from './entry/entry.component';
import { RouterModule, Routes } from '@angular/router';
import { loginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const routes: Routes = [{path:"entry",component:EntryComponent},{path:"sign-in",component:SignInComponent}];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule,RouterModule.forChild(routes),HttpClientModule
  ],
  exports:[SignInComponent],
  providers:[loginService]
})
export class LoginModuleModule { }
