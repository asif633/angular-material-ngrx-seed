import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.util';
import { ActionReducerMap } from '@ngrx/store';

export interface RouterState {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const routerReducers: ActionReducerMap<RouterState> = {
    routerReducer: fromRouter.routerReducer
};


// import * as RouterActions from './actions/router';

// store.dispatch(new RouterActions.Go({
//   path: ['/path', { routeParam: 1 }],
//   query: { page: 1 },
//   extras: { replaceUrl: false }
// });

// store.dispatch(new RouterActions.Back());

// store.dispatch(new RouterActions.Forward());