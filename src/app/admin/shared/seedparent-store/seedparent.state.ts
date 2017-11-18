import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
} from '@ngrx/store';
import * as fromSeedparent from './seedparent.reducer';
import { SeedparentState } from './seedparent.reducer';

export const selectSeedparentState = createFeatureSelector<fromSeedparent.SeedparentState>('seedparentState');

export const { selectAll: selectAllSeedparents } = fromSeedparent.seedparentAdapter.getSelectors(
    selectSeedparentState
);

export const getSelectedSeedparent = createSelector(
    selectSeedparentState,
    state => state.selectedSeedparent
);
