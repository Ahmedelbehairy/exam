import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
  error:string=''
  constructor(private _AuthService: AuthService, private _Router:Router){}
// function to check for your data from api to login in 
  onSubmit(item: any) {
    if (item.value) {
      this._AuthService.loginUserDetails(item.value).subscribe((res) => {
        if (res.success == true) {
          localStorage.setItem('userData', res.token);
          this._AuthService.getUserDataFromLocal();
          this._Router.navigate(['home']);
        } else {
          this.error = item.errors.email.message;
        }
      })
    }
  }
}
