import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedchilds, getSelectedSeedchild } from '../shared/seedchild-store/seedchild.state';
import { AddSeedchild, UpdateSeedchild, DeleteSeedchild, LoadAllSeedchild, LoadSingleSeedchild } from '../shared/seedchild-store/seedchild.actions';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';
import { selectAllSeedparents } from '../shared/seedparent-store/seedparent.state';
import { LoadAllSeedparent } from '../shared/seedparent-store/seedparent.actions';
// #child-container-import
@Component({
  selector: 'app-seedchild-container',
  templateUrl: './seedchild-container.component.html',
  styleUrls: ['./seedchild-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedchildContainerComponent implements OnInit {
  addNew: boolean;
  selectedSeedchild: Observable<Seedchild>;
  seedchilds: Observable<Seedchild[]>;
  seedparents: Observable<Seedparent[]>;
// #child-container-parents
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seedchilds = this.store.select(selectAllSeedchilds);
    this.seedparents = this.store.select(selectAllSeedparents);
    this.selectedSeedchild = this.store.select(getSelectedSeedchild);

    this.store.dispatch(new LoadAllSeedchild());
    this.store.dispatch(new LoadAllSeedparent());
// #child-container-parents-init
  }

  addNewRequest() {
    this.addNew = true;
    this.selectedSeedchild = null;
  }

  getSelectedEvent(event) {
    this.addNew = false;
    // this.selectedSeedchild = event;
    this.store.dispatch(new LoadSingleSeedchild(event.$key));
    this.selectedSeedchild.subscribe(vv => console.log('val', vv));
  }

  addEvent(event) {
    this.store.dispatch(new AddSeedchild(event));
    this.addNew = false;
  }

  updateEvent(event) {
    this.store.dispatch(new UpdateSeedchild(event));
    this.selectedSeedchild = null;
  }

  deleteEvent(event) {
    this.store.dispatch(new DeleteSeedchild(event));
  }

}
