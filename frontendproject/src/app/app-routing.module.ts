import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [

  {path : '', component : ProductlistComponent},
  {path : 'addProduct', component : AddproductComponent},
  {path : 'panier', component : PanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
