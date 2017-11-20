import { Action } from '@ngrx/store';
import { Seedmodel } from './seedmodel.model';

export const LOAD_ALL_Seedmodel = '[Seedmodel] LOAD_ALL_Seedmodel';
export const LOAD_ALL_Seedmodel_SUCCESS = '[Seedmodel] LOAD_ALL_Seedmodel_SUCCESS';
export const LOAD_ALL_Seedmodel_FAILURE = '[Seedmodel] LOAD_ALL_Seedmodel_FAILURE';
export const LOAD_SINGLE_Seedmodel = '[Seedmodel] LOAD_SINGLE_Seedmodel';
export const LOAD_SINGLE_Seedmodel_SUCCESS = '[Seedmodel] LOAD_SINGLE_Seedmodel_SUCCESS';
export const LOAD_SINGLE_Seedmodel_FAILURE = '[Seedmodel] LOAD_SINGLE_Seedmodel_FAILURE';
export const ADD_Seedmodel = '[Seedmodel] ADD_Seedmodel';
export const ADD_Seedmodel_SUCCESS = '[Seedmodel] ADD_Seedmodel_SUCCESS';
export const ADD_Seedmodel_FAILURE = '[Seedmodel] ADD_Seedmodel_FAILURE';
export const UPDATE_Seedmodel = '[Seedmodel] UPDATE_Seedmodel';
export const UPDATE_Seedmodel_SUCCESS = '[Seedmodel] UPDATE_Seedmodel_SUCCESS';
export const UPDATE_Seedmodel_FAILURE = '[Seedmodel] UPDATE_Seedmodel_FAILURE';

export const DELETE_Seedmodel = '[Seedmodel] DELETE_Seedmodel';
export const DELETE_Seedmodel_SUCCESS = '[Seedmodel] DELETE_Seedmodel_SUCCESS';
export const DELETE_Seedmodel_FAILURE = '[Seedmodel] DELETE_Seedmodel_FAILURE';

// Ngrx Action for adding to 'seedmodelState'. @payload is object
export class AddSeedmodel implements Action {
    readonly type = ADD_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action after adding to 'seedmodelState' success @payload is object
export class AddSeedmodelSuccess implements Action {
    readonly type = ADD_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action after adding to 'seedmodelState' failure @payload is string message
export class AddSeedmodelFailure implements Action {
    readonly type = ADD_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

// Ngrx Action for updating to 'seedmodelState' @payload is object
export class UpdateSeedmodel implements Action {
    readonly type = UPDATE_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action after updating to 'seedmodelState' success @payload is object
export class UpdateSeedmodelSuccess implements Action {
    readonly type = UPDATE_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action after updating to 'seedmodelState' failure @payload is string message
export class UpdateSeedmodelFailure implements Action {
    readonly type = UPDATE_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

// Ngrx Action for deleting to 'seedmodelState' @payload is object
export class DeleteSeedmodel implements Action {
    readonly type = DELETE_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action after deleting to 'seedmodelState' success @payload is object
export class DeleteSeedmodelSuccess implements Action {
    readonly type = DELETE_Seedmodel_SUCCESS;
    constructor(public payload: string) { }
}

// Ngrx Action after deleting to 'seedmodelState' failure @payload is string message
export class DeleteSeedmodelFailure implements Action {
    readonly type = DELETE_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

// Ngrx Action for getting allSeedmodels from 'seedmodelState'
export class LoadAllSeedmodel implements Action {
    readonly type = LOAD_ALL_Seedmodel;
    constructor() { }
}

// Ngrx Action for getting allSeedmodels from 'seedmodelState' success @payload is array of objects
export class LoadAllSeedmodelSuccess implements Action {
    readonly type = LOAD_ALL_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel[]) { }
}

// Ngrx Action for getting allSeedmodels from 'seedmodelState' failure @payload is string
export class LoadAllSeedmodelFailure implements Action {
    readonly type = LOAD_ALL_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

// Ngrx Action for getting singleSeedmodel from 'seedmodelState' @payload is id of object
export class LoadSingleSeedmodel implements Action {
    readonly type = LOAD_SINGLE_Seedmodel;
    constructor(public payload: string) { }
}

// Ngrx Action for getting singleSeedmodel from 'seedmodelState' success @payload is object
export class LoadSingleSeedmodelSuccess implements Action {
    readonly type = LOAD_SINGLE_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

// Ngrx Action for getting singleSeedmodel from 'seedmodelState' failure @payload is string
export class LoadSingleSeedmodelFailure implements Action {
    readonly type = LOAD_SINGLE_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

export type Actions =
    LoadAllSeedmodel | LoadAllSeedmodelSuccess | LoadAllSeedmodelFailure |
    LoadSingleSeedmodel | LoadSingleSeedmodelSuccess | LoadSingleSeedmodelFailure |
    AddSeedmodel | AddSeedmodelSuccess | AddSeedmodelFailure |
    UpdateSeedmodel | UpdateSeedmodelSuccess | UpdateSeedmodelFailure |
    DeleteSeedmodel | DeleteSeedmodelSuccess | DeleteSeedmodelFailure
    ;
