import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import {MatSidenavModule} from  '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { AuthService } from './service/auth/auth.service';
import { RegisterComponent } from './container/register/register.component';
import { ProductComponent } from './container/product/product.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProfileComponent } from './container/profile/profile.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { AddFormComponent } from './container/profile/user-form/add-form-useless/add-form.component';
import { EditFormComponent } from './container/profile/user-form/edit-form/edit-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFiltersComponent } from './container/product-filters/product-filters.component';
import { ProductBoxComponent } from './container/product-box/product-box.component';
import { CartComponent } from './container/cart/cart.component';
import { CartService } from './service/cart/cart.service';
import { StoreService } from './service/store/store.service';
import { CheckoutDialogComponent } from './container/checkout-dialog/checkout-dialog.component';
import { FooterComponent } from './container/footer/footer.component';
import { AddProductComponent } from './container/add-product/add-product.component';
import { ProductBoxUpdateComponent } from './container/product-box-update/product-box-update.component';
import { ProductUpdateFormComponent } from './container/product-box-update/product-update-form/product-update-form/product-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductComponent,
    ProductContainerComponent,
    ProfileComponent,
    AddFormComponent,
    EditFormComponent,
    ProductFiltersComponent,
    ProductBoxComponent,
    CartComponent,
    CheckoutDialogComponent,
    FooterComponent,
    AddProductComponent,
    ProductBoxUpdateComponent,
    ProductUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClient,
    AuthService,
    CartService,
    StoreService
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
