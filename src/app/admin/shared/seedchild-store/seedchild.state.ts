import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';
import * as fromSeedchild from './seedchild.reducer';
import { SeedchildState } from './seedchild.reducer';

export const selectSeedchildState = createFeatureSelector<fromSeedchild.SeedchildState>('seedchildState');

export const { selectAll: selectAllSeedchilds } = fromSeedchild.seedchildAdapter.getSelectors(
    selectSeedchildState
);

export const getSelectedSeedchild = createSelector(
    selectSeedchildState,
    state => state.selectedSeedchild
);
