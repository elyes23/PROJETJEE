import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllProduct(): Observable<any> {
    return this.http.get('http://localhost:8082/products/listProduct', httpOptions);
  }

  addProductToPanel(idProduct, idUser){
    return this.http.get('http://localhost:8082/products/addProductToPanel/'+idProduct+'/'+idUser, httpOptions);
  }

  login(user){
    return this.http.post('http://localhost:8082/products/login',user, httpOptions);
  }

  addProductt(user){
    return this.http.post('http://localhost:8082/products/addProduct',user, httpOptions);
  }
  LoadMyPanel(id){
    return this.http.get('http://localhost:8082/products/myPanel/'+id, httpOptions)
  }

  removeProductToPanel(idProduct, idUser){
    return this.http.get('http://localhost:8082/products/removeProductToPanel/'+idProduct+'/'+idUser, httpOptions);
  }

  loadAllCategories(){
    return this.http.get('http://localhost:8082/products/categories', httpOptions);
  }
}
