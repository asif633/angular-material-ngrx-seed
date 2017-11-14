import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedmodelActions from './seedmodel.actions';
import { Seedmodel } from './seedmodel.model';
import { LOAD_SINGLE_Seedmodel } from './seedmodel.actions';

export interface SeedmodelState extends EntityState<Seedmodel> {
    selectedSeedmodel: Seedmodel;
}

export const seedmodelAdapter: EntityAdapter<Seedmodel> = createEntityAdapter<Seedmodel>();

export const initialState: SeedmodelState = seedmodelAdapter.getInitialState({
    selectedSeedmodel: null
});

export function seedmodelReducer(
    state: SeedmodelState = initialState,
    action: seedmodelActions.Actions
) {
    switch (action.type) {
        case seedmodelActions.LOAD_ALL_Seedmodel: {
            return {
                ...state
            };
        }
        case seedmodelActions.LOAD_ALL_Seedmodel_SUCCESS: {
            return {
                ...seedmodelAdapter.addMany(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel,
            };
        }
        case seedmodelActions.ADD_Seedmodel:
            return {
                ...seedmodelAdapter.addOne(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel
            };
        case seedmodelActions.UPDATE_Seedmodel:
            const pay = action.payload;
            return {
                ...seedmodelAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedmodel: state.selectedSeedmodel
            };
        case seedmodelActions.DELETE_Seedmodel:
            return {
                ...seedmodelAdapter.removeOne(action.payload.id, state),
                selectedSeedmodel: state.selectedSeedmodel
            };
        case seedmodelActions.LOAD_SINGLE_Seedmodel:
            return {
                ...state
            };
        case seedmodelActions.LOAD_SINGLE_Seedmodel_SUCCESS:
            return {
                ...state,
                selectedSeedmodel: action.payload
            };
        default:
            return state;
    }
}
