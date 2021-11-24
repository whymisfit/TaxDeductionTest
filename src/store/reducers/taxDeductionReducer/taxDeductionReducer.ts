import {TaxDeductionActions, TaxDeductionState, TaxDeductionTypes} from "./types";

const initialState: TaxDeductionState = {
    showModal: false,
}

const taxDeductionReducer = (state = initialState, action: TaxDeductionActions): TaxDeductionState => {
    switch (action.type) {
        case TaxDeductionTypes.SHOW_MODAL: {
            return {...state, showModal: true};
        }
        case TaxDeductionTypes.CLOSE_MODAL: {
            return {...state, showModal: false};
        }
        case TaxDeductionTypes.UPDATE_SALARY: {
            return {...state, salary: action.payload.salary};
        }
        default: {
            return {...state};
        }
    }
}

export default taxDeductionReducer;