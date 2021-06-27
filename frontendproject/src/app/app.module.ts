import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PanierComponent } from './panier/panier.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path : 'listProduct', component : ProductlistComponent},
  {path : 'addProduct', component : AddproductComponent},
  {path : 'panier', component : PanierComponent},
  {path : 'login', component : LoginComponent},
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AddproductComponent,
    PanierComponent,
    LoginComponent
  ],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
