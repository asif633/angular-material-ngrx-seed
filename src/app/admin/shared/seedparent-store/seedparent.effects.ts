import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as SeedparentActions from './seedparent.actions';
import { SeedparentService } from './seedparent.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SeedparentEffectsService {
    constructor(private actions$: Actions, private seedparentService: SeedparentService) { }

    @Effect()
    seedparentAdd$: Observable<Action> = this.actions$
        .ofType<SeedparentActions.AddSeedparent>(SeedparentActions.ADD_Seedparent)
        .map(action => action.payload)
        .switchMap(({ seedchilds, ...payload }) => this.seedparentService.addSeedparent(payload)
            .then(resolve => seedchilds.map(single =>
                this.seedparentService.addSeedchilds(resolve.key, single.$key)))
            .then(resolve => new SeedparentActions.AddSeedparentSuccess(payload)
            , reject => new SeedparentActions.AddSeedparentFailure(payload.id)
            )
        );

    @Effect()
    seedparentUpdate$: Observable<Action> = this.actions$
        .ofType<SeedparentActions.UpdateSeedparent>(SeedparentActions.UPDATE_Seedparent)
        .map(action => action.payload)
        .switchMap(({ seedchilds, ...payload }) =>
            this.seedparentService.updateSeedparent(payload)
                .then(() => this.seedparentService.deleteSeedchilds(payload.$key).then(() =>
                    seedchilds.map(single => this.seedparentService.addSeedchilds(payload.$key, single.$key)))
                    .then(resolve => new SeedparentActions.UpdateSeedparentSuccess(payload))
                    .catch(err => new SeedparentActions.UpdateSeedparentFailure('failure'))
                ));

    @Effect()
    seedparentDelete$: Observable<Action> = this.actions$
        .ofType<SeedparentActions.DeleteSeedparent>(SeedparentActions.DELETE_Seedparent)
        .map(action => action.payload)
        .switchMap((payload) => this.seedparentService.deleteSeedparent(payload.$key)
            .then(() => this.seedparentService.deleteSeedchilds(payload.$key))
            .then(resolve => new SeedparentActions.DeleteSeedparentSuccess(payload.id)
            , reject => new SeedparentActions.DeleteSeedparentFailure('fail'))
        );

    @Effect()
    seedparentLoadAll$: Observable<Action> = this.actions$
        .ofType<SeedparentActions.LoadAllSeedparent>(SeedparentActions.LOAD_ALL_Seedparent)
        .switchMap(() => this.seedparentService.getAllSeedparents()
            .map(seedparents => new SeedparentActions.LoadAllSeedparentSuccess(seedparents))
            .catch(err => Observable.of(new SeedparentActions.LoadAllSeedparentFailure('fail')))
        );

    @Effect()
    seedparentLoadSingle$: Observable<Action> = this.actions$
        .ofType<SeedparentActions.LoadSingleSeedparent>(SeedparentActions.LOAD_SINGLE_Seedparent)
        .map(action => action.payload)
        .switchMap(seedparentKey => {
            return this.seedparentService.getSingleSeedparent(seedparentKey)
                .map(single => {
                    return this.seedparentService.getAllSeedchilds(single.$key)
                        .map(seedchilds => ({ ...single, seedchilds }));
                });
        })
        .mergeMap(parentmerge => parentmerge)
        .map(seedparent => new SeedparentActions.LoadSingleSeedparentSuccess(seedparent))
        .catch(err => Observable.of(new SeedparentActions.LoadSingleSeedparentFailure('fail')));

}
