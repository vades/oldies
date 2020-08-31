import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@app/core/services/firebase/firestore.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styles: []
})
export class FirestoreComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('boards').valueChanges();
  }
  ngOnInit() {
    //this.getData()
    console.log(this.items);
  }
  getData() {
    
      
  
  }

}
