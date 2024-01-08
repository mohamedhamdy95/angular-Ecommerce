import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
forgotForm : FormGroup = new FormGroup ({
  email : new FormControl(null,[Validators.required,Validators.email])
})
forgotPass(form:FormGroup){
console.log(form)
}
}

