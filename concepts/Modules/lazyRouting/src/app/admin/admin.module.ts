import { NgModule } from '@angular/core';
 
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent,RightsComponent,DashboardComponent } from './pages';
 
 
@NgModule({
  declarations: [UserComponent,RightsComponent,DashboardComponent],
  imports: [
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }