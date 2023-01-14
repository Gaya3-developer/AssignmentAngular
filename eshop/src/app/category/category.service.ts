import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from './category';
import { Product} from '../products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]>{
    const categoryUrl = 'http://localhost:3000/categories';

    return this.httpClient.get<Category[]>(categoryUrl); // return an observable
  }

  searchCategoryProducts(categoryId): Observable<Product[]>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product[]>(productUrl); // return an observable
  }
}