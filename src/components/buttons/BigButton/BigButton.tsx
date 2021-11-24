import React from 'react';
import {useDispatch} from "react-redux";
import {showModal} from "../../../store/reducers/taxDeductionReducer/actions";

const BigButton: React.FC = () => {

    const dispatch = useDispatch();

    const onHandleClick = () => {
        dispatch(showModal());
    }

    return (
        <button className="btn btn-secondary" onClick={onHandleClick}>
            Налоговый вычет
        </button>
    )
};

export default BigButton;