import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/state';
import * as RouterActions from '../../shared/store/router.actions';
import { Seedmodel } from '../shared/seedmodel-store/seedmodel.model';
import { Observable } from 'rxjs/Observable';
import { selectAllSeedmodels, getSeedmodelError, getSelectedSeedmodel } from '../shared/seedmodel-store/seedmodel.state';
import * as SeedmodelActions from '../shared/seedmodel-store/seedmodel.actions';
import {MatSnackBar} from '@angular/material';
// #child-container-import
// #parent-container-import
@Component({
  selector: 'app-seedmodel-container',
  templateUrl: './seedmodel-container.component.html',
  styleUrls: ['./seedmodel-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
/* This component contains SeedmodelForm and SeedmodelTable components.
 this is a smart component. It subscribes to store and also dispatches actions.
*/
export class SeedmodelContainerComponent implements OnInit {
  addNew: boolean;
  selectedSeedmodel: Observable<Seedmodel>;
  seedmodels: Observable<Seedmodel[]>;
  seedmodelError: Observable<any>;
// #child-parent-declare
// #parent-child-declare
  constructor(private store: Store<AppState>, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.seedmodels = this.store.select(selectAllSeedmodels);
    this.seedmodelError = this.store.select(getSeedmodelError);
    this.selectedSeedmodel = this.store.select(getSelectedSeedmodel);
    this.store.dispatch(new SeedmodelActions.LoadAllSeedmodel());
    this.seedmodelError.subscribe(res => {
      if (res !== null) {
        if (res.addError) {
          this.showSnackBar('Some problem happened while saving data', '', 3000);
        } else if (res.addError === false) {
          this.showSnackBar('Successfully added data', '', 2000);
        }
        if (res.updateError) {
          this.showSnackBar('Some problem happened while updating data', '', 3000);
        } else if (res.updateError === false) {
          this.showSnackBar('Successfully updating data', '', 2000);
        }
        if (res.deleteError) {
          this.showSnackBar('Some problem happened while deleting data', '', 3000);
        } else if (res.deleteError === false) {
          this.showSnackBar('Successfully deleted data', '', 2000);
        }
      }
    });

// #child-container-parents-init
// #parent-container-childs-init
  }

// New entry request
  addNewRequest() {
    this.addNew = true;
  }

// Show snackbar
showSnackBar(message, action, duration) {
  this.snackBar.open(message, action, {
    duration,
  });
}

// Dispatch select action after getting event from TableComponent
  getSelectedEvent(event) {
    this.addNew = false;
    // this.selectedSeedmodel = event;
    this.store.dispatch(new SeedmodelActions.LoadSingleSeedmodel(event.$key));
  }

// Dispatch add action after getting event from FormComponent
  addEvent(event) {
    this.store.dispatch(new SeedmodelActions.AddSeedmodel(event));
    this.addNew = false;
  }

// Dispatch update action after getting event from FormComponent
  updateEvent(event) {
    this.store.dispatch(new SeedmodelActions.UpdateSeedmodel(event));
  }

// Dispatch delete action after getting event from FormComponent
  deleteEvent(event) {
    this.store.dispatch(new SeedmodelActions.DeleteSeedmodel(event));
  }

}
