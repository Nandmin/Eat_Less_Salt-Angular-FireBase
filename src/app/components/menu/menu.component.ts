import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userDisplayName: any | any[] | null = '';
  userData: any = '';
  isLoggedIn: boolean = this.auth.isLoggedIn; 

  constructor(  
    public auth: AuthService
  ) { }

  

  
  ngOnInit(): void {
    if(this.isLoggedIn){
      this.userData = this.auth.user.email;
    }else{
      // this.userData = 'logged user';
    }
    // let userDisplayName = this.auth.userData.displayName;// localStorage.getItem('user'!);
  
    // console.log('username: ', this.auth.userData.displayName);
    // // Test data
    // if (userDisplayName == null || userDisplayName == 'undefined'){
    //   this.userDisplayName = 'Logged user';
    // }
  }

}
