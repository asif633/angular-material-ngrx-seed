import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedchildActions from './seedchild.actions';
import { Seedchild } from './seedchild.model';
import { LOAD_SINGLE_Seedchild, ADD_Seedchild_FAILURE, UPDATE_Seedchild_SUCCESS, DELETE_Seedchild_SUCCESS } from './seedchild.actions';
import { selectSeedchildState, getSelectedSeedchild } from './seedchild.state';

interface SeedchildError {
    addError?: boolean;
    updateError?: boolean;
    deleteError?: boolean;
}

export interface SeedchildState extends EntityState<Seedchild> {
    selectedSeedchild: Seedchild;
    seedchildError: SeedchildError;
}

export const seedchildAdapter: EntityAdapter<Seedchild> = createEntityAdapter<Seedchild>();

export const initialState: SeedchildState = seedchildAdapter.getInitialState({
    selectedSeedchild: null,
    seedchildError: null
});

export function seedchildReducer(
    state: SeedchildState = initialState,
    action: seedchildActions.Actions
) {
    switch (action.type) {
        // case seedchildActions.ADD_Seedchild:
        //     return {
        //         ...seedchildAdapter.addOne(action.payload, state),
        //         ...state,
        //         selectedSeedchild: state.selectedSeedchild,
        //         seedchildError: null
        //     };
        case seedchildActions.ADD_Seedchild_SUCCESS:
            return {
                ...seedchildAdapter.addOne(action.payload, state),
                selectedSeedchild: state.selectedSeedchild,
                seedchildError: { addError: false }
            };
        case seedchildActions.ADD_Seedchild_FAILURE:
            return {
                ...seedchildAdapter.removeOne(action.payload, state),
                selectedSeedchild: state.selectedSeedchild,
                seedchildError: { addError: true }
            };
        // case seedchildActions.UPDATE_Seedchild:
        //     return {
        //         ...state,
        //         seedchildError: null
        //     };
        case seedchildActions.UPDATE_Seedchild_SUCCESS:
            const pay = action.payload;
            return {
                ...seedchildAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedchild: state.selectedSeedchild,
                seedchildError: { updateError: false }
            };
        case seedchildActions.UPDATE_Seedchild_FAILURE:
            return {
                ...state,
                seedchildError: { updateError: true }
            };
        // case seedchildActions.DELETE_Seedchild:
        //     return {
        //         ...seedchildAdapter.removeOne(action.payload.id, state),
        //         selectedSeedchild: state.selectedSeedchild,
        //         seedchildError: null
        //     };
        case seedchildActions.DELETE_Seedchild_SUCCESS:
            return {
                ...seedchildAdapter.removeOne(action.payload, state),
                selectedSeedchild: state.selectedSeedchild,
                seedchildError: { deleteError: false }
            };
        case seedchildActions.DELETE_Seedchild_FAILURE:
            return {
                ...state,
                seedchildError: { deleteError: true }
            };
        // case seedchildActions.LOAD_ALL_Seedchild: {
        //     return {
        //         ...state
        //     };
        // }
        case seedchildActions.LOAD_ALL_Seedchild_SUCCESS: {
            return {
                ...seedchildAdapter.addMany(action.payload, state),
                selectedSeedchild: state.selectedSeedchild
            };
        }
        // case seedchildActions.LOAD_SINGLE_Seedchild:
        //     return {
        //         ...state
        //     };
        case seedchildActions.LOAD_SINGLE_Seedchild_SUCCESS:
            return {
                ...state,
                selectedSeedchild: action.payload
            };
        default:
            return state;
    }
}
