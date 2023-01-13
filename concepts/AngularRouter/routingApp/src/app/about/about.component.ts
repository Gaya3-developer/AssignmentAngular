import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private route:Router,private activatedRoute: ActivatedRoute){}
  navigeToHome(){
this.route.navigate(["contact"])
//this.route.navigateByUrl("contact") 
this.route.navigate(["contact"], {relativeTo: this.activatedRoute}) 
}
}
