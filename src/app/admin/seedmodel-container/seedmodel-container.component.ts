import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedmodels } from '../shared/seedmodel-store/seedmodel.state';
import { AddSeedmodel, UpdateSeedmodel, DeleteSeedmodel, LoadAllSeedmodel } from '../shared/seedmodel-store/seedmodel.actions';
// #child-container-import
// #parent-container-import
@Component({
  selector: 'app-seedmodel-container',
  templateUrl: './seedmodel-container.component.html',
  styleUrls: ['./seedmodel-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeedmodelContainerComponent implements OnInit {
  addNew: boolean;
  selectedSeedmodel: Seedmodel;
  seedmodels: Observable<Seedmodel[]>;
// #child-container-parents
// #parent-container-childs
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seedmodels = this.store.select(selectAllSeedmodels);
    this.store.dispatch(new LoadAllSeedmodel());
// #child-container-parents-init
// #parent-container-childs-init
  }

  addNewRequest() {
    this.addNew = true;
    this.selectedSeedmodel = null;
  }

  getSelectedEvent(event) {
    this.addNew = false;
    this.selectedSeedmodel = event;
  }

  addEvent(event) {
    this.store.dispatch(new AddSeedmodel(event));
    this.addNew = false;
  }

  updateEvent(event) {
    this.store.dispatch(new UpdateSeedmodel(event));
    this.selectedSeedmodel = null;
  }

  deleteEvent(event) {
    this.store.dispatch(new DeleteSeedmodel(event));
  }

}
