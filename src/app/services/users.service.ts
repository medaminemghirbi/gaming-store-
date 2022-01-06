import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fb : AngularFirestore) { }
  getUsers()
  {
    return this .fb.collection('users').snapshotChanges();
  }
}
