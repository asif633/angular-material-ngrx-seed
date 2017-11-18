import { Seedchild } from '../seedchild-store/seedchild.model';
// #parent-model-import
export interface Seedparent {
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
    seedchilds?: Seedchild[];
// #parent-model
}
