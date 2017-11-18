import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Seedchild } from './seedchild.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SeedchildService {
  // seedchilds: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getAllSeedchilds(): Observable<Seedchild[]> {
    // this.seedchilds =
    return this.db.list('seedchilds').snapshotChanges().map(changes =>
      changes.map(c => ({ $key: c.payload.key, ...c.payload.val() })));
  }

  addSeedchild(seedchild: Seedchild) {
    return this.db.list('seedchilds').push(seedchild);
  }

  updateSeedchild(seedchild: Seedchild) {
    const {$key, ...toUpdate} = seedchild;
    return this.db.list('seedchilds').update(seedchild.$key, toUpdate);
    // return this.db.object(`seedchilds/${seedchild.$key}`).set(seedchild);
  }

  deleteSeedchild(seedchildKey: string) {
    return this.db.list('seedchilds').remove(seedchildKey);
  }

  getSingleSeedchild(seedchildKey: string): Observable<Seedchild> {
    return this.db.object(`seedchilds/${seedchildKey}`).snapshotChanges().map(c =>
      ({ $key: c.payload.key, ...c.payload.val() }));
  }

}
