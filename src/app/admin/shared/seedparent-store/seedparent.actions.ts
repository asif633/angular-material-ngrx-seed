import { Action } from '@ngrx/store';
import { Seedparent } from './seedparent.model';

export const LOAD_ALL_Seedparent = '[Seedparent] LOAD_ALL_Seedparent';
export const LOAD_ALL_Seedparent_SUCCESS = '[Seedparent] LOAD_ALL_Seedparent_SUCCESS';
export const LOAD_ALL_Seedparent_FAILURE = '[Seedparent] LOAD_ALL_Seedparent_FAILURE';
export const LOAD_SINGLE_Seedparent = '[Seedparent] LOAD_SINGLE_Seedparent';
export const LOAD_SINGLE_Seedparent_SUCCESS = '[Seedparent] LOAD_SINGLE_Seedparent_SUCCESS';
export const LOAD_SINGLE_Seedparent_FAILURE = '[Seedparent] LOAD_SINGLE_Seedparent_FAILURE';
export const ADD_Seedparent = '[Seedparent] ADD_Seedparent';
export const ADD_Seedparent_SUCCESS = '[Seedparent] ADD_Seedparent_SUCCESS';
export const ADD_Seedparent_FAILURE = '[Seedparent] ADD_Seedparent_FAILURE';
export const UPDATE_Seedparent = '[Seedparent] UPDATE_Seedparent';
export const UPDATE_Seedparent_SUCCESS = '[Seedparent] UPDATE_Seedparent_SUCCESS';
export const UPDATE_Seedparent_FAILURE = '[Seedparent] UPDATE_Seedparent_FAILURE';

export const DELETE_Seedparent = '[Seedparent] DELETE_Seedparent';
export const DELETE_Seedparent_SUCCESS = '[Seedparent] DELETE_Seedparent_SUCCESS';
export const DELETE_Seedparent_FAILURE = '[Seedparent] DELETE_Seedparent_FAILURE';

export class LoadAllSeedparent implements Action {
    readonly type = LOAD_ALL_Seedparent;
    constructor() {}
}

export class LoadAllSeedparentSuccess implements Action {
    readonly type = LOAD_ALL_Seedparent_SUCCESS;
    constructor(public payload: Seedparent[]) {}
}

export class LoadAllSeedparentFailure implements Action {
    readonly type = LOAD_ALL_Seedparent_FAILURE;
    constructor(public payload: string) {}
}

export class LoadSingleSeedparent implements Action {
    readonly type = LOAD_SINGLE_Seedparent;
    constructor() {}
}

export class LoadSingleSeedparentSuccess implements Action {
    readonly type = LOAD_SINGLE_Seedparent_SUCCESS;
    constructor(public payload: Seedparent) {}
}

export class LoadSingelSeedparentFailure implements Action {
    readonly type = LOAD_SINGLE_Seedparent_FAILURE;
    constructor(public payload: string) {}
}

export class AddSeedparent implements Action {
    readonly type = ADD_Seedparent;
    constructor(public payload: Seedparent) {}
}

export class AddSeedparentSuccess implements Action {
    readonly type = ADD_Seedparent_SUCCESS;
    constructor(public payload: string) {}
}

export class AddSeedparentFailure implements Action {
    readonly type = ADD_Seedparent_FAILURE;
    constructor(public payload: string) {}
}

export class UpdateSeedparent implements Action {
    readonly type = UPDATE_Seedparent;
    constructor(public payload: Seedparent) {}
}

export class UpdateSeedparentSuccess implements Action {
    readonly type = UPDATE_Seedparent_SUCCESS;
    constructor(public payload: string) {}
}

export class UpdateSeedparentFailure implements Action {
    readonly type = UPDATE_Seedparent_FAILURE;
    constructor(public payload: string) {}
}

export class DeleteSeedparent implements Action {
    readonly type = DELETE_Seedparent;
    constructor(public payload: Seedparent) {}
}

export class DeleteSeedparentSuccess implements Action {
    readonly type = DELETE_Seedparent_SUCCESS;
    constructor(public payload: string) {}
}

export class DeleteSeedparentFailure implements Action {
    readonly type = DELETE_Seedparent_FAILURE;
    constructor(public payload: string) {}
}

export type Actions =
    LoadAllSeedparent | LoadAllSeedparentSuccess | LoadAllSeedparentFailure |
    LoadSingleSeedparent | LoadSingleSeedparentSuccess | LoadSingelSeedparentFailure |
    AddSeedparent | AddSeedparentSuccess | AddSeedparentFailure |
    UpdateSeedparent | UpdateSeedparentSuccess | UpdateSeedparentFailure |
    DeleteSeedparent | DeleteSeedparentSuccess | DeleteSeedparentFailure
;
