import { Component } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { faFacebookF, faGooglePlusG} from "@fortawesome/free-brands-svg-icons"
import { AuthService } from '../auth.service';
import { User} from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser,GoogleLoginProvider, SocialAuthService, FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
  MicrosoftLoginProvider, } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faFacebookF =faFacebookF;
  faGooglePlusG=faGooglePlusG;




  constructor(private registerService: AuthService,
    private authSocialService:SocialAuthService
  ) { }
  userList: User[];
  existingEmailsList: any = [];
  emailsList: any = [];
 /* onSubmit(regForm: NgForm) {
    // stop here if form is invalid
  
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(regForm.value, null, 4));
}*/

ngOnInit(): void {
 
  this.registerService.getAllUser().subscribe(  data => {
    for (let item in data) {
      this.emailsList.push(data[item].email);
    }
  },
  err => {
    console.log(err);
  }
  );
}
emailExists(control:NgModel)
{
 this.existingEmailsList = this.emailsList.filter(function(email) {
    return email === control.control.value
  });
  if (this.existingEmailsList.length>0)
    control.control.setErrors({emailExists:"Max length exceded"})
  else
  control.control.setErrors(null)
}

addUser(regForm: NgForm){
  if (regForm.invalid) {
    return;
}
  let newProduct = {
      id:  this.userList['id'] + 1,
      name: regForm.value.name,
      email: regForm.value.email,
      password: regForm.value.password,
      agreement: regForm.value.agreement
  }
  this.registerService.createUser(newProduct).subscribe(data => {
    console.log(data);
  });

}


onGoogleSignIn(){
  this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
    (res) => {
      console.log(res)
    }
  )
}



}
