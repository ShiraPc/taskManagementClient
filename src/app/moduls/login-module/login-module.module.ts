import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule
  ],
  exports:[SignInComponent]
})
export class LoginModuleModule { }
