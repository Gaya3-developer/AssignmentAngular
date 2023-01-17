import { Component } from '@angular/core';
import { Category} from '../../category/category';
import { CategoryService} from '../../category/category.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categoryList: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
   /* this.categoryService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    });*/
  }
}
