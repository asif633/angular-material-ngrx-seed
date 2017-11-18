// #child-model-import
// #parent-model-import
export interface Seedmodel {
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
// #child-model
// #parent-model
}
