import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { faAngleDoubleRight, faStar, faTags} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent {
  productId=0;
  productDetails: Product;
  faAngleDoubleRight=faAngleDoubleRight;
  faStar=faStar;
  faTags=faTags;
  faFacebook=faFacebookF;
  faGooglePlus=faGooglePlusG;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
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
