import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Seedchild } from './seedchild.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';

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

  getSeedparent(seedchildKey) {
    return this.db.list(`seedchild-seedparents/${seedchildKey}`).snapshotChanges()
      .map(res => res.map(res1 => res1.payload.key))
      .map(lspc => lspc.map(parentKey => this.db.object(`seedparents/${parentKey}`)
        .snapshotChanges().map(xs => ({ $key: xs.payload.key, ...xs.payload.val() }))))
        .mergeMap(fbojs => Observable.combineLatest(fbojs))
      ;
  }

  getSeedparents(seedchildKey) {
    return this.db.list(`seedparent-seedchilds`, ref => ref.orderByChild(seedchildKey).equalTo(true)).snapshotChanges()
    .map(res => res.map(res1 => res1.payload.key))
    .map(lspc => lspc.map(parentKey => this.db.object(`seedparents/${parentKey}`)
      .snapshotChanges().map(xs => ({ $key: xs.payload.key, ...xs.payload.val() }))))
      .mergeMap(fbojs => Observable.combineLatest(fbojs))
    ;
  }

  addSeedparent(seedparentKey: string, seedchildKey: string) {
    return this.db.object(`seedparent-seedchilds/${seedchildKey}/${seedparentKey}`).set(true);
  }

  deleteSeedparent(seedparentKey: string, seedchildKey: string) {
    return this.db.list(`seedparent-seedchilds/${seedparentKey}`).remove(seedchildKey);
  }
}
