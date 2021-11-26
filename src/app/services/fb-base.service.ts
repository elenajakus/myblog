import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {
  userCollection: AngularFirestoreCollection<User>;
  constructor(private afs: AngularFirestore) { 
    this.userCollection = this.afs.collection('users');
  }

  // tslint:disable-next-line: typedef

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  getUser = (userid?: string) => this.userCollection.doc(userid).valueChanges();

}
