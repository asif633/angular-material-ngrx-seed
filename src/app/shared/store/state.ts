import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterState, routerReducers } from './router.reducer';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.util';

export interface AppState {
    routerState: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
    routerState: fromRouter.routerReducer
};
