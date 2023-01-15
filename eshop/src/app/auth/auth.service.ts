import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
API_KEY:string = "AIzaSyAejjKPr6Ea6S0PmXOxCascxKk6PmMerr0"
  constructor(private httpClient: HttpClient) { }

  createUser(userBody): Observable<User>{
    const usertUrl = 'http://localhost:3000/users';

    return this.httpClient.post<User>(usertUrl, userBody); // return an observable
  }
  getAllUser(): Observable<User[]>{
    const productUrl = 'http://localhost:3000/users';

    return this.httpClient.get<User[]>(productUrl); // return an observable
  }
  googleSignIn(token){
    return this.httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${this.API_KEY}`,{
    postBody:`id_token=${token}&providerId=google.com`,
    requestUri:'http://localhost:4200',
    returnIdpCredential:true,
    returnSecureToken:true
  })
  }

}
