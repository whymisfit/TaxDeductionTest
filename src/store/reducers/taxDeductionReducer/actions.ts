import {ICloseModal, IShowModal, IUpdateSalary, TaxDeductionTypes} from "./types";

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

export const updateSalary = (salary: number): IUpdateSalary => {
    return {
        type: TaxDeductionTypes.UPDATE_SALARY,
        payload: {salary}
    }
}