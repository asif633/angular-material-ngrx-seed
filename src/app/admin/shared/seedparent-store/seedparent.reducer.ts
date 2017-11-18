import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedparentActions from './seedparent.actions';
import { Seedparent } from './seedparent.model';
import { LOAD_SINGLE_Seedparent, ADD_Seedparent_FAILURE, UPDATE_Seedparent_SUCCESS, DELETE_Seedparent_SUCCESS } from './seedparent.actions';
import { selectSeedparentState, getSelectedSeedparent } from './seedparent.state';

interface SeedparentError {
    addError?: boolean;
    updateError?: boolean;
    deleteError?: boolean;
}

export interface SeedparentState extends EntityState<Seedparent> {
    selectedSeedparent: Seedparent;
    seedparentError: SeedparentError;
}

export const seedparentAdapter: EntityAdapter<Seedparent> = createEntityAdapter<Seedparent>();

export const initialState: SeedparentState = seedparentAdapter.getInitialState({
    selectedSeedparent: null,
    seedparentError: null
});

export function seedparentReducer(
    state: SeedparentState = initialState,
    action: seedparentActions.Actions
) {
    switch (action.type) {
        // case seedparentActions.ADD_Seedparent:
        //     return {
        //         ...seedparentAdapter.addOne(action.payload, state),
        //         ...state,
        //         selectedSeedparent: state.selectedSeedparent,
        //         seedparentError: null
        //     };
        case seedparentActions.ADD_Seedparent_SUCCESS:
            return {
                ...seedparentAdapter.addOne(action.payload, state),
                selectedSeedparent: state.selectedSeedparent,
                seedparentError: { addError: false }
            };
        case seedparentActions.ADD_Seedparent_FAILURE:
            return {
                ...seedparentAdapter.removeOne(action.payload, state),
                selectedSeedparent: state.selectedSeedparent,
                seedparentError: { addError: true }
            };
        // case seedparentActions.UPDATE_Seedparent:
        //     return {
        //         ...state,
        //         seedparentError: null
        //     };
        case seedparentActions.UPDATE_Seedparent_SUCCESS:
            const pay = action.payload;
            return {
                ...seedparentAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedparent: state.selectedSeedparent,
                seedparentError: { updateError: false }
            };
        case seedparentActions.UPDATE_Seedparent_FAILURE:
            return {
                ...state,
                seedparentError: { updateError: true }
            };
        // case seedparentActions.DELETE_Seedparent:
        //     return {
        //         ...seedparentAdapter.removeOne(action.payload.id, state),
        //         selectedSeedparent: state.selectedSeedparent,
        //         seedparentError: null
        //     };
        case seedparentActions.DELETE_Seedparent_SUCCESS:
            return {
                ...seedparentAdapter.removeOne(action.payload, state),
                selectedSeedparent: state.selectedSeedparent,
                seedparentError: { deleteError: false }
            };
        case seedparentActions.DELETE_Seedparent_FAILURE:
            return {
                ...state,
                seedparentError: { deleteError: true }
            };
        // case seedparentActions.LOAD_ALL_Seedparent: {
        //     return {
        //         ...state
        //     };
        // }
        case seedparentActions.LOAD_ALL_Seedparent_SUCCESS: {
            return {
                ...seedparentAdapter.addMany(action.payload, state),
                selectedSeedparent: state.selectedSeedparent
            };
        }
        // case seedparentActions.LOAD_SINGLE_Seedparent:
        //     return {
        //         ...state
        //     };
        case seedparentActions.LOAD_SINGLE_Seedparent_SUCCESS:
            return {
                ...state,
                selectedSeedparent: action.payload
            };
        default:
            return state;
    }
}
