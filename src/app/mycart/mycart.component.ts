import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
cartDetails:any
constructor(private _CartService:CartService){}
ngOnInit(): void {
  this.getCart();
}
getCart(){
  this._CartService.getCartItems().subscribe({
    next:(respons)=>{
      this.cartDetails =respons.data 
      console.log(this.cartDetails.products)
    },
    error:(err)=>{console.log(err)}
  })
}

removeItem(productId:string){
  this._CartService.daleteCartItems(productId).subscribe({
    next:(respons)=>{
      Swal.fire({
        icon: "error",
        title: "item deleted successfly",
        showConfirmButton: false,
        timer: 1500
      });
      this.cartDetails = respons.data;
      // this.getCart();
      console.log(respons)},
    error:(err)=>{console.log(err)},
    complete:()=>{}
  })
}

// ****** update cart items *****
updateItems(id:string,count:number){
  this._CartService.updateCartItems(id,count).subscribe({
    next:(respons)=>{
      this.cartDetails = respons.data;
      console.log(respons)},
    error:(err)=>{console.log(err)},
    complete:()=>{}
  })
  }

}


