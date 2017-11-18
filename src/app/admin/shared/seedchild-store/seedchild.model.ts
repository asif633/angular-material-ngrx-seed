import { Seedparent } from '../seedparent-store/seedparent.model';
// #child-model-import
export interface Seedchild {
    $key?: string;
    id: string;
    name: string;
    description?: string;
    gender?: string;
    married?: boolean;
    dob?: Date;
    az?: string;
    multiSel?: string[];
    fruits?: string[];
    toppings?: string[];
    seedparent?: Seedparent;
// #child-model
}
