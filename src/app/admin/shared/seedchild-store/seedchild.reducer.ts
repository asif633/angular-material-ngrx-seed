import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedchildActions from './seedchild.actions';
import { Seedchild } from './seedchild.model';
import { LOAD_SINGLE_Seedchild } from './seedchild.actions';
import { selectSeedchildState, getSelectedSeedchild } from './seedchild.state';

export interface SeedchildState extends EntityState<Seedchild> {
    selectedSeedchild: Seedchild;
}

export const seedchildAdapter: EntityAdapter<Seedchild> = createEntityAdapter<Seedchild>();

export const initialState: SeedchildState = seedchildAdapter.getInitialState({
    selectedSeedchild: null
});

export function seedchildReducer(
    state: SeedchildState = initialState,
    action: seedchildActions.Actions
) {
    switch (action.type) {
        case seedchildActions.LOAD_ALL_Seedchild: {
            return {
                ...state
            };
        }
        case seedchildActions.LOAD_ALL_Seedchild_SUCCESS: {
            return {
                ...seedchildAdapter.addMany(action.payload, state),
                selectedSeedchild: state.selectedSeedchild,
            };
        }
        case seedchildActions.ADD_Seedchild:
            return {
                ...seedchildAdapter.addOne(action.payload, state),
                selectedSeedchild: state.selectedSeedchild
            };
        case seedchildActions.UPDATE_Seedchild:
            const pay = action.payload;
            return {
                ...seedchildAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedchild: state.selectedSeedchild
            };
        case seedchildActions.DELETE_Seedchild:
            return {
                ...seedchildAdapter.removeOne(action.payload.id, state),
                selectedSeedchild: state.selectedSeedchild
            };
        case seedchildActions.LOAD_SINGLE_Seedchild:
            return {
                ...state
            };
        case seedchildActions.LOAD_SINGLE_Seedchild_SUCCESS:
            return {
                ...state,
                selectedSeedchild: action.payload
            };
        default:
            return state;
    }
}
