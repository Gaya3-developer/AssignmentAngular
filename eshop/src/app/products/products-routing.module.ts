import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewByCategoryComponent } from './view-by-category/view-by-category.component';


const routes: Routes = [{ path: '', component: ViewAllComponent },
{path:'create', component:CreateComponent},
{ path: 'category/:id', component: ViewByCategoryComponent},
{ path: ':id', component: DetailViewComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
