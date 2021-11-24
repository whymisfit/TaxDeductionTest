import {combineReducers} from 'redux';
import taxDeductionReducer from "./taxDeductionReducer/taxDeductionReducer";

const rootReducer = combineReducers({
    tax: taxDeductionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
