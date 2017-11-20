import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Seedmodel } from './seedmodel.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class SeedmodelService {
  // seedmodels: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  // Get all data from firebase
  getAllSeedmodels(): Observable<Seedmodel[]> {
    // this.seedmodels =
    return this.db.list('seedmodels').snapshotChanges().map(changes =>
      changes.map(c => ({ $key: c.payload.key, ...c.payload.val() })));
  }

  // Add data to firebase
  addSeedmodel(seedmodel: Seedmodel) {
    return this.db.list('seedmodels').push(seedmodel);
  }

  // Update data to firebase
  updateSeedmodel(seedmodel: Seedmodel) {
    const {$key, ...toUpdate} = seedmodel;
    return this.db.list('seedmodels').update(seedmodel.$key, toUpdate);
    // return this.db.object(`seedmodels/${seedmodel.$key}`).set(seedmodel);
  }

  // Delete data from firebase
  deleteSeedmodel(seedmodelKey: string) {
    return this.db.list('seedmodels').remove(seedmodelKey);
  }

  // Get single object from firebase
  getSingleSeedmodel(seedmodelKey: string): Observable<Seedmodel> {
    return this.db.object(`seedmodels/${seedmodelKey}`).snapshotChanges().map(c =>
      ({ $key: c.payload.key, ...c.payload.val() }));
  }

// #parent-childs table import child side
// #parent-childs table import parent side

}
