import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateSalary} from "../../../store/reducers/taxDeductionReducer/actions";
import {RootState} from "../../../store/reducers";
import {calculatePayments} from "../../../store/reducers/taxDeductionReducer/actions";

const CalculateTaxInput: React.FC = () => {

    const dispatch = useDispatch();

    const salary = useSelector((state: RootState) => state.tax!.salary);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(updateSalary(parseFloat(event.target.value)));

    const calculateDeductionsHandler = () => dispatch(calculatePayments());

    return (
        <div className="input-group">
            <label className="label">Ваша зарплата в месяц</label>
            <input type="number"
                   value={salary || ""}
                   onChange={onChangeHandler}
                   placeholder="Введите данные"/>
            <button className="link red"
                    onClick={calculateDeductionsHandler}>
                Рассчитать
            </button>
        </div>
    );
};

export default CalculateTaxInput;