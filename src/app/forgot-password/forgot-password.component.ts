import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

constructor(){}

forgotPassword: FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
}
