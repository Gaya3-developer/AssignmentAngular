import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MustMatchDirective } from '../helpers/must-match.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MustMatchDirective
  ],
  imports: [
    CommonModule,
    RouterModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
