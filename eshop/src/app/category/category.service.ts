import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from './category';
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
}