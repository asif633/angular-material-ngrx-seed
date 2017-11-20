import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';
import * as fromSeedmodel from './seedmodel.reducer';
import { SeedmodelState } from './seedmodel.reducer';

export const selectSeedmodelState = createFeatureSelector<fromSeedmodel.SeedmodelState>('seedmodelState');

// selectAll from adaptor
export const { selectAll: selectAllSeedmodels } = fromSeedmodel.seedmodelAdapter.getSelectors(
    selectSeedmodelState
);

// selectedError selector creation
export const getSeedmodelError = createSelector(
    selectSeedmodelState,
    state => state.seedmodelError
);

// selectedSeedmodel selector creation
export const getSelectedSeedmodel = createSelector(
    selectSeedmodelState,
    state => state.selectedSeedmodel
);
