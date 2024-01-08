import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
baseUrl:string ='https://ecommerce.routemisr.com';
headers:any={ token : localStorage.getItem('userToken')}
numberOfCartItems= new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) {
    this.getCartItems().subscribe({
      next:(response)=>{
        this.numberOfCartItems.next(response.numOfCartItems)
        console.log(this.numberOfCartItems)},
      error:(err)=>{console.log(err)},
      complete:()=>{}
    })
  }
  // ********** add to cart *******************
  add(Id:string):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,{productId:Id},
    {
      headers:this.headers
    })
  }
  // ********** get cart items *******************
getCartItems():Observable<any>{
  return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,
  {
    headers:this.headers
  })
}
  // ********** delete cart items *******************
daleteCartItems(id:string):Observable<any>{
  return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`,
  {
    headers:this.headers
  })
}
  // ********** update cart items *******************
  updateCartItems(id:string,count:number):Observable<any>{
  return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,
  {count:count},
  {headers:this.headers})
}

  // ********** handle payment *******************
handlePayment(id:string,shippingAddress:any):Observable<any>{
return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
{shippingAddress},
{headers:this.headers})
}
}
