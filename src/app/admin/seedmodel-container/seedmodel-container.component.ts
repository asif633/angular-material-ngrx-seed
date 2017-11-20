import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedmodels, getSeedmodelError, getSelectedSeedmodel } from '../shared/seedmodel-store/seedmodel.state';
import * as SeedmodelActions from '../shared/seedmodel-store/seedmodel.actions';
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
  selectedSeedmodel: Observable<Seedmodel>;
  seedmodels: Observable<Seedmodel[]>;
  seedmodelError: Observable<any>;
// #child-container-parents
// #parent-container-childs
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.seedmodels = this.store.select(selectAllSeedmodels);
    this.seedmodelError = this.store.select(getSeedmodelError);
    this.selectedSeedmodel = this.store.select(getSelectedSeedmodel);
    this.store.dispatch(new SeedmodelActions.LoadAllSeedmodel());
// #child-container-parents-init
// #parent-container-childs-init
  }

  addNewRequest() {
    this.addNew = true;
    this.selectedSeedmodel = null;
  }

  getSelectedEvent(event) {
    this.addNew = false;
    // this.selectedSeedmodel = event;
    this.store.dispatch(new SeedmodelActions.LoadSingleSeedmodel(event));
  }

  addEvent(event) {
    this.store.dispatch(new SeedmodelActions.AddSeedmodel(event));
    this.addNew = false;
  }

  updateEvent(event) {
    this.store.dispatch(new SeedmodelActions.UpdateSeedmodel(event));
    this.selectedSeedmodel = null;
  }

  deleteEvent(event) {
    this.store.dispatch(new SeedmodelActions.DeleteSeedmodel(event));
  }

}
