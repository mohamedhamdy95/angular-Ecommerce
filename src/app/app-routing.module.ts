import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDeetailsComponent } from './product-deetails/product-deetails.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
{path:'' , redirectTo:'signin',pathMatch:"full", title:"Home"},
{path:'home' , canActivate:[authGuard], component:HomeComponent , title:"Home"},
{path:'categories' ,canActivate:[authGuard],  component:CategoriesComponent , title:"categories"},
{path:'brands' ,canActivate:[authGuard],  component:BrandsComponent , title:"brands"},
{path:'products' ,canActivate:[authGuard],  component:ProductsComponent , title:"products"},
{path:'details/:id' ,canActivate:[authGuard],  component:ProductDeetailsComponent , title:"Details"},
{path:'wishlist' ,canActivate:[authGuard],  component:WishlistComponent , title:"wishlist"},
{path:'profile' ,canActivate:[authGuard],  component:ProfileComponent , title:"profile"},
{path:'mycart' ,canActivate:[authGuard],  component:MycartComponent , title:"My Cart"},
{path:'chockout' ,canActivate:[authGuard],  component:CheckoutComponent , title:"Chock Out"},
{path:'signin' , component:SigninComponent , title:"signin"},
{path:'signup' , component:SignupComponent , title:"signup"},
{path:'forgotpassword' , component:ForgotPasswordComponent , title:"Forgotpassword"},
{path:'**' , component:NotfoundComponent , title:"404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
