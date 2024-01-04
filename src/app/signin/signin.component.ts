import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  isLoading : boolean=false;
  errorMasg:string='';
constructor(private _AuthService:AuthService , private _Router:Router){}
// *********** Form *****************
loginForm:FormGroup= new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
})

// *********** login function *****************
logIn(loginForm:FormGroup){
  this._AuthService.sigIn(loginForm.value).subscribe({
    next:(response)=>{ 
      if(response.message=="success"){
        localStorage.setItem('userToken',response.token);
        this._AuthService.decodeUserData();
        this._Router.navigate(['/home'])
      }
      // console.log(response) 
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.isLoading=false;
    }
  })
// console.log(loginForm.value)
}
}