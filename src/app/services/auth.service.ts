import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authState: any = null

  userCollection: AngularFirestoreCollection<User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }


  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }


  currentUserObservable(): any {
    return this.afAuth.authState;
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth))
  }
  createNewUser(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  newUser(user: User): Promise<void> {
    const userDoc = this.userCollection.doc(`${user.id}`);
    return userDoc.set(user);
  }

}
