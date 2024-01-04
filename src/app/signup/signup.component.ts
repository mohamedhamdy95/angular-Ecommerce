import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
errorMasg:string='';
successMasg:string='';
isLoading : boolean=false;
constructor(private _AuthService:AuthService){}
// *********** Form *****************
registerForm:FormGroup= new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^(002)?(01)[0125][0-9]{8}')]),
} ,{validators:this.rePasswordMatch})
// *********** signUp function *****************
signUp(registerFormData:FormGroup){
  this.isLoading=true;
  this._AuthService.signUp(registerFormData.value).subscribe({
    next:(response)=>{ 
      this.successMasg=response.message;
      console.log(registerFormData) 
    },
    error:(err)=> {
      this.errorMasg=err.error.message;
      console.log(this.errorMasg)
    },
    complete:()=>{
      this.isLoading=false;
    }
  })
}
// *********** repassword match function *****************
rePasswordMatch(form:any){
  let password =  form.get('password');
  let rePassword =  form.get('rePassword');
  if(password.value === rePassword.value){
    return null
  }else{
    rePassword.setErrors({passwordMatch : 'Repassword Not Match'})
    return{passwordMatch : 'Repassword Not Match'}
  }
}

}
