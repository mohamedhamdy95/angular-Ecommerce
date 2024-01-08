import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false;
  itemsNumber:number=0;
  constructor(private _AuthService:AuthService , private _CartService:CartService){
    this._CartService.numberOfCartItems.subscribe({
      next:(response)=>{
        this.itemsNumber = response;
        console.log(response)},
      error:(err)=>{console.log(err)},
      complete:()=>{},
    })
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
