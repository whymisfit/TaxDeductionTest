export type TaxDeductionState = {
    showModal: boolean,
    salary?: number,
}

export enum TaxDeductionTypes {
    SHOW_MODAL = "tax/SHOW_MODAL",
    CLOSE_MODAL = "tax/CLOSE_MODAL",
    UPDATE_SALARY = "tax/UPDATE_SALARY",
}

export interface IShowModal {
    type: TaxDeductionTypes.SHOW_MODAL
}

export interface ICloseModal {
    type: TaxDeductionTypes.CLOSE_MODAL
}

export interface IUpdateSalary {
    type: TaxDeductionTypes.UPDATE_SALARY
    payload: { salary: number }
}

export type TaxDeductionActions = IShowModal | ICloseModal | IUpdateSalary;