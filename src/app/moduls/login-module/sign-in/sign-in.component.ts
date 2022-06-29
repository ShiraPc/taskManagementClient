import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor() {

   }
 
  signIn(){
      console.log(event?.target);
  }
  sign(){

  }
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        userName:new FormControl(),
        password:new FormControl(),
        repeatPassword:new FormControl()
  });
  }

}
