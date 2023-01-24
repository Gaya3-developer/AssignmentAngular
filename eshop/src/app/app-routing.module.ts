import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from './auth';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './shared';

const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
},
{
  path: 'cart', component: CartComponent
},
{
  path: 'orders', component: OrdersComponent
},
{
  path: 'checkout', component: CheckoutComponent
},
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{
  path: '', component:HomeComponent
},
{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
