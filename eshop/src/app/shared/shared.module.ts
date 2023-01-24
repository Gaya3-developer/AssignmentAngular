import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,RouterModule,FontAwesomeModule
  ],
  declarations: [ HeaderComponent,FooterComponent, SidebarComponent, PageNotFoundComponent ],
  exports: [
    HeaderComponent,FooterComponent,SidebarComponent
  ]
})

export class SharedModule { 
 
}
