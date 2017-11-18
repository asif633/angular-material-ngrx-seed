import { Action } from '@ngrx/store';
import { Seedchild } from './seedchild.model';

export const LOAD_ALL_Seedchild = '[Seedchild] LOAD_ALL_Seedchild';
export const LOAD_ALL_Seedchild_SUCCESS = '[Seedchild] LOAD_ALL_Seedchild_SUCCESS';
export const LOAD_ALL_Seedchild_FAILURE = '[Seedchild] LOAD_ALL_Seedchild_FAILURE';
export const LOAD_SINGLE_Seedchild = '[Seedchild] LOAD_SINGLE_Seedchild';
export const LOAD_SINGLE_Seedchild_SUCCESS = '[Seedchild] LOAD_SINGLE_Seedchild_SUCCESS';
export const LOAD_SINGLE_Seedchild_FAILURE = '[Seedchild] LOAD_SINGLE_Seedchild_FAILURE';
export const ADD_Seedchild = '[Seedchild] ADD_Seedchild';
export const ADD_Seedchild_SUCCESS = '[Seedchild] ADD_Seedchild_SUCCESS';
export const ADD_Seedchild_FAILURE = '[Seedchild] ADD_Seedchild_FAILURE';
export const UPDATE_Seedchild = '[Seedchild] UPDATE_Seedchild';
export const UPDATE_Seedchild_SUCCESS = '[Seedchild] UPDATE_Seedchild_SUCCESS';
export const UPDATE_Seedchild_FAILURE = '[Seedchild] UPDATE_Seedchild_FAILURE';

export const DELETE_Seedchild = '[Seedchild] DELETE_Seedchild';
export const DELETE_Seedchild_SUCCESS = '[Seedchild] DELETE_Seedchild_SUCCESS';
export const DELETE_Seedchild_FAILURE = '[Seedchild] DELETE_Seedchild_FAILURE';

export class AddSeedchild implements Action {
    readonly type = ADD_Seedchild;
    constructor(public payload: Seedchild) { }
}

export class AddSeedchildSuccess implements Action {
    readonly type = ADD_Seedchild_SUCCESS;
    constructor(public payload: Seedchild) { }
}

export class AddSeedchildFailure implements Action {
    readonly type = ADD_Seedchild_FAILURE;
    constructor(public payload: string) { }
}

export class UpdateSeedchild implements Action {
    readonly type = UPDATE_Seedchild;
    constructor(public payload: Seedchild) { }
}

export class UpdateSeedchildSuccess implements Action {
    readonly type = UPDATE_Seedchild_SUCCESS;
    constructor(public payload: Seedchild) { }
}

export class UpdateSeedchildFailure implements Action {
    readonly type = UPDATE_Seedchild_FAILURE;
    constructor(public payload: string) { }
}

export class DeleteSeedchild implements Action {
    readonly type = DELETE_Seedchild;
    constructor(public payload: Seedchild) { }
}

export class DeleteSeedchildSuccess implements Action {
    readonly type = DELETE_Seedchild_SUCCESS;
    constructor(public payload: string) { }
}

export class DeleteSeedchildFailure implements Action {
    readonly type = DELETE_Seedchild_FAILURE;
    constructor(public payload: string) { }
}

export class LoadAllSeedchild implements Action {
    readonly type = LOAD_ALL_Seedchild;
    constructor() { }
}

export class LoadAllSeedchildSuccess implements Action {
    readonly type = LOAD_ALL_Seedchild_SUCCESS;
    constructor(public payload: Seedchild[]) { }
}

export class LoadAllSeedchildFailure implements Action {
    readonly type = LOAD_ALL_Seedchild_FAILURE;
    constructor(public payload: string) { }
}

export class LoadSingleSeedchild implements Action {
    readonly type = LOAD_SINGLE_Seedchild;
    constructor(public payload: string) { }
}

export class LoadSingleSeedchildSuccess implements Action {
    readonly type = LOAD_SINGLE_Seedchild_SUCCESS;
    constructor(public payload: Seedchild) { }
}

export class LoadSingleSeedchildFailure implements Action {
    readonly type = LOAD_SINGLE_Seedchild_FAILURE;
    constructor(public payload: string) { }
}

export type Actions =
    LoadAllSeedchild | LoadAllSeedchildSuccess | LoadAllSeedchildFailure |
    LoadSingleSeedchild | LoadSingleSeedchildSuccess | LoadSingleSeedchildFailure |
    AddSeedchild | AddSeedchildSuccess | AddSeedchildFailure |
    UpdateSeedchild | UpdateSeedchildSuccess | UpdateSeedchildFailure |
    DeleteSeedchild | DeleteSeedchildSuccess | DeleteSeedchildFailure
    ;
