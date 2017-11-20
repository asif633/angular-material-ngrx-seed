import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as SeedmodelActions from './seedmodel.actions';
import { SeedmodelService } from './seedmodel.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class SeedmodelEffectsService {
    constructor(private actions$: Actions, private seedmodelService: SeedmodelService) { }

/*
    Ngrx effect intercepts AddSeedmodel action.
    After getting payload passed to service to add data to firebase
*/
    @Effect()
    seedmodelAdd$: Observable<Action> = this.actions$
        .ofType<SeedmodelActions.AddSeedmodel>(SeedmodelActions.ADD_Seedmodel)
        .map(action => action.payload)
/*add-child-insert*/
/*add-child-delete*/.switchMap(payload => this.seedmodelService.addSeedmodel(payload)
            .then(resolve => new SeedmodelActions.AddSeedmodelSuccess(payload)
            , reject => new SeedmodelActions.AddSeedmodelFailure(payload.id)
            )
        );

/*
    Ngrx effect intercepts UpdateSeedmodel action.
    After getting payload passed to service to update data to firebase
*/
    @Effect()
    seedmodelUpdate$: Observable<Action> = this.actions$
        .ofType<SeedmodelActions.UpdateSeedmodel>(SeedmodelActions.UPDATE_Seedmodel)
        .map(action => action.payload)
/*update-child-insert*/
/*update-child-delete*/.switchMap(payload => this.seedmodelService.updateSeedmodel(payload)
            .then(resolve => new SeedmodelActions.UpdateSeedmodelSuccess(payload))
            .catch(err => new SeedmodelActions.UpdateSeedmodelFailure('failure'))
        );

/*
    Ngrx effect intercepts DeleteSeedmodel action.
    After getting payload passed to service to delete data from firebase
*/
    @Effect()
    seedmodelDelete$: Observable<Action> = this.actions$
        .ofType<SeedmodelActions.DeleteSeedmodel>(SeedmodelActions.DELETE_Seedmodel)
        .map(action => action.payload)
/*delete-child-delete*/.switchMap((payload) => this.seedmodelService.deleteSeedmodel(payload.$key)
/*delete-child-add*/
        .then(resolve => new SeedmodelActions.DeleteSeedmodelSuccess(payload.id)
            , reject => new SeedmodelActions.DeleteSeedmodelFailure('fail'))
        );

/*
    Ngrx effect intercepts LoaddAllSeedmodel action.
    After getting payload passed to service to load all data from firebase
*/
    @Effect()
    seedmodelLoadAll$: Observable<Action> = this.actions$
        .ofType<SeedmodelActions.LoadAllSeedmodel>(SeedmodelActions.LOAD_ALL_Seedmodel)
        .switchMap(() => this.seedmodelService.getAllSeedmodels()
            .map(seedmodels => new SeedmodelActions.LoadAllSeedmodelSuccess(seedmodels))
            .catch(err => Observable.of(new SeedmodelActions.LoadAllSeedmodelFailure('fail')))
        );

/*
    Ngrx effect intercepts LoadSingleSeedmodel action.
    After getting payload passed to service to get single data from firebase
*/
    @Effect()
    seedmodelLoadSingle$: Observable<Action> = this.actions$
    .ofType<SeedmodelActions.LoadSingleSeedmodel>(SeedmodelActions.LOAD_SINGLE_Seedmodel)
    .map(action => action.payload)
/*add-child-load-single*/
/*delete-load-single*/.switchMap(seedmodelKey => this.seedmodelService.getSingleSeedmodel(seedmodelKey))
        .map(seedmodel => new SeedmodelActions.LoadSingleSeedmodelSuccess(seedmodel))
        .catch(err => Observable.of(new SeedmodelActions.LoadSingleSeedmodelFailure('fail')));


}
