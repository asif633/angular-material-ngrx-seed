import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as SeedchildActions from './seedchild.actions';
import { SeedchildService } from './seedchild.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class SeedchildEffectsService {
    constructor(private actions$: Actions, private seedchildService: SeedchildService) { }

    @Effect()
    seedchildAdd$: Observable<Action> = this.actions$
        .ofType<SeedchildActions.AddSeedchild>(SeedchildActions.ADD_Seedchild)
        .map(action => action.payload)
        .switchMap(payload => this.seedchildService.addSeedchild(payload)
            .then(resolve => new SeedchildActions.AddSeedchildSuccess(payload)
            , reject => new SeedchildActions.AddSeedchildFailure(payload.id)
            )
        );

    @Effect()
    seedchildUpdate$: Observable<Action> = this.actions$
        .ofType<SeedchildActions.UpdateSeedchild>(SeedchildActions.UPDATE_Seedchild)
        .map(action => action.payload)
        .switchMap(payload => this.seedchildService.updateSeedchild(payload)
            .then(resolve => new SeedchildActions.UpdateSeedchildSuccess(payload))
            .catch(err => new SeedchildActions.UpdateSeedchildFailure('failure'))
        );

    @Effect()
    seedchildDelete$: Observable<Action> = this.actions$
        .ofType<SeedchildActions.DeleteSeedchild>(SeedchildActions.DELETE_Seedchild)
        .map(action => action.payload)
        .switchMap((payload) => this.seedchildService.deleteSeedchild(payload.$key)
            .then(resolve => new SeedchildActions.DeleteSeedchildSuccess(payload.id)
            , reject => new SeedchildActions.DeleteSeedchildFailure('fail'))
        );

    @Effect()
    seedchildLoadAll$: Observable<Action> = this.actions$
        .ofType<SeedchildActions.LoadAllSeedchild>(SeedchildActions.LOAD_ALL_Seedchild)
        .switchMap(() => this.seedchildService.getAllSeedchilds()
            .map(seedchilds => new SeedchildActions.LoadAllSeedchildSuccess(seedchilds))
            .catch(err => Observable.of(new SeedchildActions.LoadAllSeedchildFailure('fail')))
        );

    @Effect()
    seedchildLoadSingle$: Observable<Action> = this.actions$
        .ofType<SeedchildActions.LoadSingleSeedchild>(SeedchildActions.LOAD_SINGLE_Seedchild)
        .map(action => action.payload)
        .switchMap(seedchildKey => this.seedchildService.getSingleSeedchild(seedchildKey)
            .map(seedchild => new SeedchildActions.LoadSingleSeedchildSuccess(seedchild))
            .catch(err => Observable.of(new SeedchildActions.LoadSingleSeedchildFailure('fail')))
        );

}