import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { faAngleDoubleRight, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent {
  productList: Product[];
  faAngleDoubleRight=faAngleDoubleRight;
  faStar=faStar;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=> {
      this.productList = data;
      console.log(data)
    });
  }

}
