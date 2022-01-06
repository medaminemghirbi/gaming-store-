import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private fb :AngularFirestore) { }
  ajouterMessage(mess: unknown){
    return this.fb.collection('message').add(mess);
    }
   listeMessage() {  
      return  this.fb.collection('message').snapshotChanges();
  
    }
}
