import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public products;
  success: boolean = false;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){

    this.productService.getAllProduct().subscribe(data=>{
      console.log(data);
      this.products=data;
    })
  }

  addProductToPanel(id){
    var idConnectedUser= localStorage.getItem("id");
    console.log(idConnectedUser);
    this.productService.addProductToPanel(id,idConnectedUser ).subscribe(data=>{
      this.success=true;
   })
  }

}
