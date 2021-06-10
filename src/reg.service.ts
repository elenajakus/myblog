import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RegData } from './interfaces/reg-data.interface';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private afs: AngularFirestore) { }

  getAllRegData(): Observable<RegData[]> {
    return this.afs.collection<RegData>('RegData').valueChanges();
  }

  addRegData(regData: RegData){
    return this.afs.collection('RegData').add(regData);
  }

  getRegDataByEmail(email: string): Observable<RegData[]> {
    return this.afs.collection<RegData>('HackedData', ref => ref.where('email', '==', email)).valueChanges();
  }
}
