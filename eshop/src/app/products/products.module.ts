import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewByCategoryComponent } from './view-by-category/view-by-category.component';


@NgModule({
  declarations: [
    CreateComponent,
    ViewAllComponent,
    ViewByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  exports:[
    CreateComponent,
    ViewAllComponent
  ]
})
export class ProductsModule { }
