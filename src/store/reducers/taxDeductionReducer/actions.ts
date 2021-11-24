import {ICloseModal, IShowModal, TaxDeductionTypes} from "./types";

export const showModal = (): IShowModal => {
    return {
        type: TaxDeductionTypes.SHOW_MODAL,
    }
}

export const closeModal = (): ICloseModal => {
    return {
        type: TaxDeductionTypes.CLOSE_MODAL,
    }
}