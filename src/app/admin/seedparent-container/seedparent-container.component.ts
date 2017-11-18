import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedparents } from '../shared/seedparent-store/seedparent.state';
import { AddSeedparent, UpdateSeedparent, DeleteSeedparent } from '../shared/seedparent-store/seedparent.actions';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';
import { selectAllSeedchilds } from '../shared/seedchild-store/seedchild.state';
// #parent-container-import
@Component({
  selector: 'app-seedparent-container',
  templateUrl: './seedparent-container.component.html',
  styleUrls: ['./seedparent-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedparentContainerComponent implements OnInit {
  addNew: boolean;
  selectedSeedparent: Seedparent;
  seedparents: Observable<Seedparent[]>;
  seedchilds: Observable<Seedchild[]>;
// #parent-container-childs
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seedparents = this.store.select(selectAllSeedparents);
    this.seedchilds = this.store.select(selectAllSeedchilds);
// #parent-container-childs-init
  }

  addNewRequest() {
    this.addNew = true;
    this.selectedSeedparent = null;
  }

  getSelectedEvent(event) {
    this.addNew = false;
    this.selectedSeedparent = event;
    console.log('seed', this.selectedSeedparent);
  }

  addEvent(event) {
    this.store.dispatch(new AddSeedparent(event));
    this.addNew = false;
  }

  updateEvent(event) {
    this.store.dispatch(new UpdateSeedparent(event));
    this.selectedSeedparent = null;
  }

  deleteEvent(event) {
    this.store.dispatch(new DeleteSeedparent(event));
  }

}
