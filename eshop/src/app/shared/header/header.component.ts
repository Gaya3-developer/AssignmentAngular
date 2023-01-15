import { Component, ViewEncapsulation, HostListener} from '@angular/core';
import { faPhone, faEnvelope, faMapMarker,faUser,faUserPlus,faSearch, faCartPlus, faBars, faGear} from '@fortawesome/free-solid-svg-icons';

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
}
