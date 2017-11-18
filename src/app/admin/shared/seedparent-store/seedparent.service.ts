import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Seedparent } from './seedparent.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class SeedparentService {
  // seedparents: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getAllSeedparents(): Observable<Seedparent[]> {
    // this.seedparents =
    return this.db.list('seedparents').snapshotChanges().map(changes =>
      changes.map(c => ({ $key: c.payload.key, ...c.payload.val() })));
  }

  addSeedparent(seedparent: Seedparent) {
    return this.db.list('seedparents').push(seedparent);
  }

  updateSeedparent(seedparent: Seedparent) {
    const { $key, ...toUpdate } = seedparent;
    return this.db.list('seedparents').update(seedparent.$key, toUpdate);
    // return this.db.object(`seedparents/${seedparent.$key}`).set(seedparent);
  }

  deleteSeedparent(seedparentKey: string) {
    return this.db.list('seedparents').remove(seedparentKey);
  }

  getSingleSeedparent(seedparentKey: string): Observable<Seedparent> {
    return this.db.object(`seedparents/${seedparentKey}`).snapshotChanges().map(c =>
      ({ $key: c.payload.key, ...c.payload.val() }));
  }

  getAllSeedchilds(seedparentKey) {
    return this.db.list(`seedparent-seedchilds/${seedparentKey}`).snapshotChanges()
      .map(res => res.map(res1 => res1.payload.key))
      .map(lspc => lspc.map(childKey => this.db.object(`seedchilds/${childKey}`)
        .snapshotChanges().map(xs => ({ $key: xs.payload.key, ...xs.payload.val() }))))
      .mergeMap(fbojs => Observable.combineLatest(fbojs))
      ;
  }

  addSeedchilds(seedparentKey: string, seedchildkey: string) {
    this.db.object(`seedparent-seedchilds/${seedparentKey}/${seedchildkey}`).set(true);
  }

  deleteSeedchilds(seedparentKey: string) {
    return this.db.list(`seedparent-seedchilds`).remove(seedparentKey);
  }

}
