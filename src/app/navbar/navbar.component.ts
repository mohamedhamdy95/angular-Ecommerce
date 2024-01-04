import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService){
    this._AuthService.userTokenData.subscribe({
      next:()=>{
        if(this._AuthService.userTokenData.getValue() != null){
          this.isLogin = true;
        }else{
          this.isLogin = false
        }
      }
    })
  }
  logOut(){
    this._AuthService.logOut()
  }
}
