import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDisplayName: any | any[] | null = '';
  userData: any = this.authService.userData;

  user$: any = getAuth().currentUser
  gender: string = '';
  birthday: string = ''
  displayName: any;

  constructor(
    // public afs: AngularFirestore,   // Inject Firestore service
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    // public router: Router,
    // public ngZone: NgZone // NgZone service to remove outside scope warning

     public authService: AuthService,
     public afAuth: AngularFireAuth
  ) { }

  //  const auth: any = getAuth().currentUser;
  
//     updateProfile(auth: any, {
//     displayName: "Jane Q. User", 
//     photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
  

  // UpdateProfile( displayName ) {
  //   console.log('In Update profile');
  //   return this.afAuth.updateProfile({
  //       displayName: displayName,
  //       photoURL: "https://example.com/jane-q-user/profile.jpg"

  //   }).then((result) => {
  //         console.log('Did the update profile');

  //   }, function(error){

  //   });

    async UpdateProfile(displayName: string) {
      const profile = {
          displayName: displayName,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
      }
      return (await this.afAuth.currentUser)?.updateProfile(profile);
  }

  // const auth: any = getAuth();
  



// updateProfile(auth.currentUser, {    // or you can await the method without callbacks
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

  

  ngOnInit(): void {
    let userDisplayName =  localStorage.getItem('user'!);
    console.log('username: ', this.authService.userData);
    console.log('userdata prof: ', this.userData);
    console.log('username2: ', userDisplayName);
  }

}
