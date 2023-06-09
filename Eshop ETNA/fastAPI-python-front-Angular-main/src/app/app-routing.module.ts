import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './container/add-product/add-product.component';
import { CartComponent } from './container/cart/cart.component';
import { LoginComponent } from './container/login/login.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProductComponent } from './container/product/product.component';
import { AddFormComponent } from './container/profile/user-form/add-form-useless/add-form.component';
import { EditFormComponent } from './container/profile/user-form/edit-form/edit-form.component';
import { ProfileComponent } from './container/profile/profile.component';
import { RegisterComponent } from './container/register/register.component';
import { ProductUpdateFormComponent } from './container/product-box-update/product-update-form/product-update-form/product-update-form.component';

const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'routeAcreer', component: AddFormComponent},
  {path: 'updateUser', component: EditFormComponent},
  {path: 'cart', component: CartComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'updatePost', component: ProductUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
