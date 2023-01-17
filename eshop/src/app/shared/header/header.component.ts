import { Component, ViewEncapsulation, HostListener} from '@angular/core';
import { faPhone, faEnvelope, faMapMarker,faUser,faUserPlus,faSearch, faCartPlus, faBars, faGear} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { CategoryService } from 'src/app/category/category.service';
import { TokenStorageService } from 'src/app/helpers/token-storage.service';
import { CartService } from '../../cart/cart.service';
import { Category} from '../../category/category';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent {
 title:string = "E - Shop";
 faPhone = faPhone;
 faEmail = faEnvelope;
 faLocation=faMapMarker;
 faUser=faUser;
 faUserPlus=faUserPlus;
 faSearch=faSearch;
 faCartPlus=faCartPlus;
 faBars=faBars;
 faGear=faGear;
 scrolled: boolean = false;
 toggleMenu:boolean = false;
 isLoggedIn = false;
 cartData: any;
 categoryList: Category[];
  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 300;
  }
  menuOpen(){
  this.toggleMenu = true;
  }
  menuClose(){
    this.toggleMenu = false;
  }

  constructor(
    private _token: TokenStorageService,
    private _auth: AuthService,
   private _cart: CartService,
   private categoryService: CategoryService
  ) {
    this._auth.user.subscribe((user) => {
      if (user) this.isLoggedIn = true;
      else this.isLoggedIn = false;
    });
    this._cart.cartDataObs$.subscribe((cartData) => {
      this.cartData = cartData;
    });
  }
  ngOnInit(): void {
     this.categoryService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    });
    if (this._token.getUser()) this.isLoggedIn = true;
    else this.isLoggedIn = false;
  }
  removeProductFromCart(id: number) {
    this._cart.removeProduct(id);
  }

  logout() {
    this._auth.logout();
    console.log(this.isLoggedIn)
  }
}
