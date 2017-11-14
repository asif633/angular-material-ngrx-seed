import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import { Action } from '@ngrx/store';
// import * as CategoryActions from './category.actions';
// import { CategoryService } from './category.service';
// import { Category } from './category.model';
// import { LoadAllCategory, LoadAllCategorySuccess } from './category.actions';

@Injectable()
export class SeedmodelEffectsService {
//    constructor(private actions$: Actions, private categoryService: CategoryService) { }

    // @Effect()
    // categoryAdd$: Observable<Action> = this.actions$
    //     .ofType<CategoryActions.LoadAllCategory>(CategoryActions.LOAD_ALL_Category)
    //     .map(() => new LoadAllCategorySuccess(this.categoryService.cats));

}
