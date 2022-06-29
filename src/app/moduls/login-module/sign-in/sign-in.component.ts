import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { loginService } from '../login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private _login:loginService) {

   }
 
  signIn(){
    if(!      this._login.checkValidity(
        this.loginForm.value['userName'],
        this.loginForm.value['password'],
        this.loginForm.value['repeatPassword']))
        {
          alert('user name or password are unvalid')
          //TODO
          //empty the inputs
        }
        else{
          
          alert('user added succesfully')
        }

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
