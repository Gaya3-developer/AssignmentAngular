import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent {
  productId=0;
  productDetails: Product;
  constructor(private activatedRoute : ActivatedRoute, private productsService: ProductsService){}
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data =>{
    console.log(data)
    this.productId = data['id'];
this.productsService.viewProduct(this.productId).subscribe(productData=>{
  this.productDetails = productData;
})
  })
  }
}
