import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { NotFoundComponent } from './admin/not-found.component';
 
const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  declarations:[NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }