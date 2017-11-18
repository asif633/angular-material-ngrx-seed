import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as seedmodelActions from './seedmodel.actions';
import { Seedmodel } from './seedmodel.model';
import { LOAD_SINGLE_Seedmodel, ADD_Seedmodel_FAILURE, UPDATE_Seedmodel_SUCCESS, DELETE_Seedmodel_SUCCESS } from './seedmodel.actions';
import { selectSeedmodelState, getSelectedSeedmodel } from './seedmodel.state';

interface SeedmodelError {
    addError?: boolean;
    updateError?: boolean;
    deleteError?: boolean;
}

export interface SeedmodelState extends EntityState<Seedmodel> {
    selectedSeedmodel: Seedmodel;
    seedmodelError: SeedmodelError;
}

export const seedmodelAdapter: EntityAdapter<Seedmodel> = createEntityAdapter<Seedmodel>();

export const initialState: SeedmodelState = seedmodelAdapter.getInitialState({
    selectedSeedmodel: null,
    seedmodelError: null
});

export function seedmodelReducer(
    state: SeedmodelState = initialState,
    action: seedmodelActions.Actions
) {
    switch (action.type) {
        // case seedmodelActions.ADD_Seedmodel:
        //     return {
        //         ...seedmodelAdapter.addOne(action.payload, state),
        //         ...state,
        //         selectedSeedmodel: state.selectedSeedmodel,
        //         seedmodelError: null
        //     };
        case seedmodelActions.ADD_Seedmodel_SUCCESS:
            return {
                ...seedmodelAdapter.addOne(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel,
                seedmodelError: { addError: false }
            };
        case seedmodelActions.ADD_Seedmodel_FAILURE:
            return {
                ...seedmodelAdapter.removeOne(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel,
                seedmodelError: { addError: true }
            };
        // case seedmodelActions.UPDATE_Seedmodel:
        //     return {
        //         ...state,
        //         seedmodelError: null
        //     };
        case seedmodelActions.UPDATE_Seedmodel_SUCCESS:
            const pay = action.payload;
            return {
                ...seedmodelAdapter.updateOne(
                    { id: action.payload.id, changes: pay },
                    state
                ),
                selectedSeedmodel: state.selectedSeedmodel,
                seedmodelError: { updateError: false }
            };
        case seedmodelActions.UPDATE_Seedmodel_FAILURE:
            return {
                ...state,
                seedmodelError: { updateError: true }
            };
        // case seedmodelActions.DELETE_Seedmodel:
        //     return {
        //         ...seedmodelAdapter.removeOne(action.payload.id, state),
        //         selectedSeedmodel: state.selectedSeedmodel,
        //         seedmodelError: null
        //     };
        case seedmodelActions.DELETE_Seedmodel_SUCCESS:
            return {
                ...seedmodelAdapter.removeOne(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel,
                seedmodelError: { deleteError: false }
            };
        case seedmodelActions.DELETE_Seedmodel_FAILURE:
            return {
                ...state,
                seedmodelError: { deleteError: true }
            };
        // case seedmodelActions.LOAD_ALL_Seedmodel: {
        //     return {
        //         ...state
        //     };
        // }
        case seedmodelActions.LOAD_ALL_Seedmodel_SUCCESS: {
            return {
                ...seedmodelAdapter.addMany(action.payload, state),
                selectedSeedmodel: state.selectedSeedmodel
            };
        }
        // case seedmodelActions.LOAD_SINGLE_Seedmodel:
        //     return {
        //         ...state
        //     };
        case seedmodelActions.LOAD_SINGLE_Seedmodel_SUCCESS:
            return {
                ...state,
                selectedSeedmodel: action.payload
            };
        default:
            return state;
    }
}
