import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [{ path: '', component: ViewAllComponent },
{path:'create', component:CreateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
