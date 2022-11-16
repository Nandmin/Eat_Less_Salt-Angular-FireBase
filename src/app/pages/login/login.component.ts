import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  isLoggedIn: boolean = this.authService.isLoggedIn; 

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.isLoggedIn){
      this.userData = this.authService.user.email;
      console.log('login:', this.isLoggedIn);
    }else{
      // this.userData = 'logged user';
    }
  }

}
