import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userDisplayName: any | any[] | null= '';

  constructor(  
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    let userDisplayName = this.auth.userData.displayName;// localStorage.getItem('user'!);

    console.log('username: ', this.auth.userData.displayName);
    // Test data
    if (userDisplayName == null || userDisplayName == 'undefined'){
      this.userDisplayName = 'Logged user';
    }
  }

}
