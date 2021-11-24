import {TaxDeductionActions, TaxDeductionState, TaxDeductionTypes, TaxPayment} from "./types";

const initialState: TaxDeductionState = {
    showModal: false,
}

const MOUNTS = 12;
const PERCENTAGE_DEDUCTION = 0.13;
const MAX_TAX_DEDUCTION = 260_000;

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
        case TaxDeductionTypes.CALCULATE_PAYMENTS: {
            const deduction = (state.salary! * MOUNTS) * PERCENTAGE_DEDUCTION;
            let sumDeduction = 0;
            let payments: TaxPayment[] = [];

            while (true) {
                if (sumDeduction + deduction < MAX_TAX_DEDUCTION) {
                    payments.push({
                        value: deduction,
                        selected: false,
                    });
                } else {
                    payments.push({
                        value: MAX_TAX_DEDUCTION - sumDeduction,
                        selected: false,
                    });
                    break;
                }
                sumDeduction += deduction;
            }

            return {
                ...state,
                payments: [...payments],
            }
        }
        default: {
            return {...state};
        }
    }
}

export default taxDeductionReducer;