import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService  {
  constructor(private http: HttpClient) {  }
 getProducts() {
  return this.http.get(
    'http://makeup-api.herokuapp.com/api/v1/products.json'
  );
}

}
