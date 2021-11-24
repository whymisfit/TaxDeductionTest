export type TaxDeductionState = {
    showModal: boolean,
}

export enum TaxDeductionTypes {
    SHOW_MODAL = "tax/SHOW_MODAL",
    CLOSE_MODAL = "tax/CLOSE_MODAL",
}

export interface IShowModal {
    type: TaxDeductionTypes.SHOW_MODAL
}

export interface ICloseModal {
    type: TaxDeductionTypes.CLOSE_MODAL
}

export type TaxDeductionActions = IShowModal | ICloseModal;