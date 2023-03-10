import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [{ path: 'products', 
 loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{path:'orders', component:ListOrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
