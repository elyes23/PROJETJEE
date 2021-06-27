import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private productService : ProductService) { }
  public myProducts;
  public success:boolean = false;
  ngOnInit(): void {
    this.loadMyPanel();
  }

  loadMyPanel(){
    var myId= localStorage.getItem("id")
    this.productService.LoadMyPanel(myId).subscribe(data=>{
      this.myProducts=data
    })
  }

  delete(idProduct){
    console.log(idProduct);
    var myId= localStorage.getItem("id")
    this.productService.removeProductToPanel(idProduct,myId).subscribe(data=>{
      this.success=true;
      this.loadMyPanel();
      this.success=false;
    })
  }

}
