import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';
import * as fromSeedmodel from './seedmodel.reducer';
import { SeedmodelState } from './seedmodel.reducer';

export const selectSeedmodelState = createFeatureSelector<fromSeedmodel.SeedmodelState>('seedmodelState');

export const { selectAll: selectAllSeedmodels } = fromSeedmodel.seedmodelAdapter.getSelectors(
    selectSeedmodelState
);

export const getSeedmodelError = createSelector(
    selectSeedmodelState,
    state => state.seedmodelError
);

export const getSelectedSeedmodel = createSelector(
    selectSeedmodelState,
    state => state.selectedSeedmodel
);
