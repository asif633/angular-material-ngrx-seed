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

export class AddSeedmodel implements Action {
    readonly type = ADD_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

export class AddSeedmodelSuccess implements Action {
    readonly type = ADD_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

export class AddSeedmodelFailure implements Action {
    readonly type = ADD_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

export class UpdateSeedmodel implements Action {
    readonly type = UPDATE_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

export class UpdateSeedmodelSuccess implements Action {
    readonly type = UPDATE_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

export class UpdateSeedmodelFailure implements Action {
    readonly type = UPDATE_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

export class DeleteSeedmodel implements Action {
    readonly type = DELETE_Seedmodel;
    constructor(public payload: Seedmodel) { }
}

export class DeleteSeedmodelSuccess implements Action {
    readonly type = DELETE_Seedmodel_SUCCESS;
    constructor(public payload: string) { }
}

export class DeleteSeedmodelFailure implements Action {
    readonly type = DELETE_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

export class LoadAllSeedmodel implements Action {
    readonly type = LOAD_ALL_Seedmodel;
    constructor() { }
}

export class LoadAllSeedmodelSuccess implements Action {
    readonly type = LOAD_ALL_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel[]) { }
}

export class LoadAllSeedmodelFailure implements Action {
    readonly type = LOAD_ALL_Seedmodel_FAILURE;
    constructor(public payload: string) { }
}

export class LoadSingleSeedmodel implements Action {
    readonly type = LOAD_SINGLE_Seedmodel;
    constructor(public payload: string) { }
}

export class LoadSingleSeedmodelSuccess implements Action {
    readonly type = LOAD_SINGLE_Seedmodel_SUCCESS;
    constructor(public payload: Seedmodel) { }
}

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
