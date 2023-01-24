import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from '../helpers/api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = environment.apiUrl;
  constructor(private httpClient: HttpClient,private _api: ApiService) { }

  getAllProducts(): Observable<Product[]>{
    const productUrl = this.url + 'products';

    return this.httpClient.get<Product[]>(productUrl); // return an observable
  }


  getSingleProduct(id: Number): Observable<any> {
    console.log(id);
    return this._api.getTypeRequest('products/' + id);
  }

/*
  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }*/
}
