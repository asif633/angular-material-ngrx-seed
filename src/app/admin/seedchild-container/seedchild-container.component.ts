import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedchild } from '../shared/seedchild-store/seedchild.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedchilds } from '../shared/seedchild-store/seedchild.state';
import { AddSeedchild, UpdateSeedchild, DeleteSeedchild } from '../shared/seedchild-store/seedchild.actions';
import { Seedparent } from '../shared/seedparent-store/seedparent.model';
import { selectAllSeedparents } from '../shared/seedparent-store/seedparent.state';
// #child-container-import
@Component({
  selector: 'app-seedchild-container',
  templateUrl: './seedchild-container.component.html',
  styleUrls: ['./seedchild-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedchildContainerComponent implements OnInit {
  addNew: boolean;
  selectedSeedchild: Seedchild;
  seedchilds: Observable<Seedchild[]>;
  seedparents: Observable<Seedparent[]>;
// #child-container-parents
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seedchilds = this.store.select(selectAllSeedchilds);
    this.seedparents = this.store.select(selectAllSeedparents);
// #child-container-parents-init
  }

  addNewRequest() {
    this.addNew = true;
    this.selectedSeedchild = null;
  }

  getSelectedEvent(event) {
    this.addNew = false;
    this.selectedSeedchild = event;
    console.log('seed', this.selectedSeedchild);
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
