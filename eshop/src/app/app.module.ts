import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AuthModule } from './auth';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {
  GoogleLoginProvider,
  SocialLoginModule,
  FacebookLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,SharedModule,AuthModule,SlickCarouselModule,HomeModule,SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
