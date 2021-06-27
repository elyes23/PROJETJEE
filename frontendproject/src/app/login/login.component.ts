import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: boolean=false;
    showLogin:boolean =false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private productService: ProductService
    ) {

    }

    ngOnInit() {
      if (localStorage.getItem("id") != null){
        this.showLogin=false;
      }
        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    logout(){
      localStorage.removeItem("id");
      this.showLogin=true;
    }
    onSubmit() {
      console.log('here');
      let user = {login:this.loginForm.value.login,password:this.loginForm.value.password}
        this.productService.login(user).subscribe((data : User)=> {
          if (data != null ){
            var user = new User();
            user = data;
            localStorage.setItem("id", data.id+"");
            this.router.navigate(["/listProduct"]);
            //localStorage.setItem("login", data.login);
          }
          this.error=true;

        })

    }
  }
