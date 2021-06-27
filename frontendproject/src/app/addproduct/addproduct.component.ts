import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../Category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean=false;
  showLogin:boolean =false;
  categories;
  filtredCategories=[];

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private productService: ProductService
  ) {

  }

  ngOnInit() {

      this.addProductForm = this.formBuilder.group({
          name: ['', Validators.required],
          details: ['', Validators.required],
          price: ['', Validators.required],
          category:['', Validators.required],
      });
      this.loadAllCategories();

  }

  // convenience getter for easy access to form fields
  get f() { return this.addProductForm.controls; }


  onSubmit() {
    console.log('here');

    const found = this.categories.find(element => element.nameCategory === this.addProductForm.value.category);

    let user = {nameProduct:this.addProductForm.value.name,
                details:this.addProductForm.value.details,
                price: this.addProductForm.value.price,
                category:found
              }
      this.productService.addProductt(user).subscribe((data)=> {

        this.router.navigate(["/listProduct"]);

      })

  }

  loadAllCategories(){
    this.productService.loadAllCategories().subscribe(data=>{
      console.log('tt');
      this.categories = data as Category[];
    })
  }
}

