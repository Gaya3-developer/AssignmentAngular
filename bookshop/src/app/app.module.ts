
import {
  GoogleLoginProvider,
  SocialLoginModule,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
  MicrosoftLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule,SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '85086066366-00hau8v3dgjuuo179am6ntr054k3dkt0.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('561602290896109'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
            ),
          },
          {
            id: VKLoginProvider.PROVIDER_ID,
            provider: new VKLoginProvider('7624815'),
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              '0611ccc3-9521-45b6-b432-039852002705'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
