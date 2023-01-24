import { Component,HostListener } from '@angular/core';
import { faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faPhone = faPhone;
  faEmail = faEnvelope;
  faLocation=faMapMarker;
  faFacebook=faFacebookF;
  faGooglePlus=faGooglePlusG;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  currentYear: number = new Date().getFullYear();
  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 400;
  }
  scrollToHeader(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

  }
}
