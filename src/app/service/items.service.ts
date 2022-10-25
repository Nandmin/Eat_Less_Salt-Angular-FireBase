import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Items } from '../model/items';




@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  all: Observable<any>
  itemsCollection: AngularFirestoreCollection<any>;
  // id: AngularFirestoreCollection<Items>;

  constructor(
    private fireStore: AngularFirestore
  ) {
    this.itemsCollection = this.fireStore.collection('Sausages');
    //kötegelt lekérdezés kettesével
    //this.itemsCollection = this.fireStore.collection<Items>('lowsaltDB', ref => ref.where('name', '!=', '').limit(2));
    this.all = this.itemsCollection.valueChanges({
      idField: 'docID'
    });

    // this.id = this.fireStore.collection<Items>('Sausages', ref => ref.where('id', '!=', ''));
    // console.log('id: ',  this.id.valueChanges({idField: 'id'}));
   }

   create(doc: any): Promise<any>{
    return this.itemsCollection.add({...doc});
   }

   update(doc: any): Promise<any>{
    const id = doc.docID;
    delete doc.docID;

    return this.itemsCollection.doc(id).update({...doc});
   }

   delete(doc: any): Promise<any>{
    return this.itemsCollection.doc(doc.docID).delete();
   }
}
