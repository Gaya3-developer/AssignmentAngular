import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Product } from '../product';
import { Category } from '../../category/category';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.scss']
})
export class ViewByCategoryComponent {
  searchCategory: Category;
  productList:Product[];
constructor(private activatedRoute:ActivatedRoute, private categoryService: CategoryService){}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(data =>
  {
    this.searchCategory = data['id'];
this.categoryService.searchCategoryProducts( this.searchCategory).subscribe(categoryData => {
  this.productList = categoryData;
});
  })
}
}
