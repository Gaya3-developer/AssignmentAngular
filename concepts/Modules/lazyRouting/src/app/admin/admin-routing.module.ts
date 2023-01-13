import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { UserComponent , RightsComponent ,DashboardComponent } from './pages';
 
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'rights', component: RightsComponent},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }