import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedparentActions from './seedparent.actions';
import { Seedparent } from './seedparent.model';
import { LOAD_SINGLE_Seedparent } from './seedparent.actions';
import { selectSeedparentState, getSelectedSeedparent } from './seedparent.state';

export interface SeedparentState extends EntityState<Seedparent> {
    selectedSeedparent: Seedparent;
}

export const seedparentAdapter: EntityAdapter<Seedparent> = createEntityAdapter<Seedparent>();

export const initialState: SeedparentState = seedparentAdapter.getInitialState({
    selectedSeedparent: null
});

export function seedparentReducer(
    state: SeedparentState = initialState,
    action: seedparentActions.Actions
) {
    switch (action.type) {
        case seedparentActions.LOAD_ALL_Seedparent: {
            return {
                ...state
            };
        }
        case seedparentActions.LOAD_ALL_Seedparent_SUCCESS: {
            return {
                ...seedparentAdapter.addMany(action.payload, state),
                selectedSeedparent: state.selectedSeedparent,
            };
        }
        case seedparentActions.ADD_Seedparent:
            return {
                ...seedparentAdapter.addOne(action.payload, state),
                selectedSeedparent: state.selectedSeedparent
            };
        case seedparentActions.UPDATE_Seedparent:
            const pay = action.payload;
            return {
                ...seedparentAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedparent: state.selectedSeedparent
            };
        case seedparentActions.DELETE_Seedparent:
            return {
                ...seedparentAdapter.removeOne(action.payload.id, state),
                selectedSeedparent: state.selectedSeedparent
            };
        case seedparentActions.LOAD_SINGLE_Seedparent:
            return {
                ...state
            };
        case seedparentActions.LOAD_SINGLE_Seedparent_SUCCESS:
            return {
                ...state,
                selectedSeedparent: action.payload
            };
        default:
            return state;
    }
}
