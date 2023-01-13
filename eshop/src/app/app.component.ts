import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eshop';

  constructor(private router: Router){
    }

    checkUrl(){
     if(this.router.url.includes('/products')){
      return true;
     
     }
     else{
      return false;
    } 
    }
}
