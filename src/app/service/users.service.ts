import { Injectable } from '@angular/core';
import { collection, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire//firestore';
import { AuthService } from './auth.service';
import { User } from '../model/user'
import { Observable, switchMap, of, from } from 'rxjs';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  constructor(
    private firestore: Firestore, 
    private authService: AuthService
    ) {}

  // get currentUserProfile$(): Observable<User | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap((user) => {
  //       if (user?.uid) {
  //         return of(null);
  //       }
  //       const ref = doc(this.firestore, 'users', user?.uid);
  //       return docData(ref) as Observable<User>;
  //     })
  //   );
  // }

  // addUser(user: User): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.uid);
  //   return from(setDoc(ref, user));
  // }

  // updateUser(user: User): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.uid);
  //   return from(updateDoc(ref, { ...user }));
  // }
}
