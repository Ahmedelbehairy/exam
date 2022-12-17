import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router){}
  ngOnInit(): void {

  }


  onSubmit(item: any) {
    if (item.value) {
      this._AuthService.registerUserDetails(item.value).subscribe((res) => {
        if (res.success == true) {
          this._Router.navigate(['login'])
        } else {
          this.error = item.errors.email.message
        }
      })
    }
  }
}
