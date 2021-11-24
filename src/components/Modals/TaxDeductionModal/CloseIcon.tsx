import React from 'react';
import {closeModal} from "../../../store/reducers/taxDeductionReducer/actions";
import {useDispatch} from "react-redux";

const CloseIcon: React.FC = () => {

    const dispatch = useDispatch();

    const onHandleClick = () => dispatch(closeModal());

    return (
        <button className="card-close" onClick={onHandleClick}>
            x
        </button>
    )
};

export default CloseIcon;