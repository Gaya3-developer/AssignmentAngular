import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegisterComponent } from './auth';
import { PageNotFoundComponent } from './shared';

const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
},

{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{
  path: '', redirectTo: 'products', pathMatch: 'full'
},
{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
