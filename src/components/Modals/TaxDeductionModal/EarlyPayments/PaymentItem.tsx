import React from 'react';
import {TaxPayment} from "../../../../store/reducers/taxDeductionReducer/types";

interface IPaymentItem {
    payment: TaxPayment,
    id: number,
}


const PaymentItem: React.FC<IPaymentItem> = ({payment, id}: IPaymentItem) => {

    const getLabelMonth = () => {
        switch (id) {
            case 2: {
                return "во 2-ой год";
            }
            case 3: {
                return "во 3-ий год";
            }
            default: {
                return `во ${id}-ый год`;
            }
        }
    }

    return (
        <div>
            <input type="checkbox"/>
            <p>{payment.value} рублей</p>
            <span>{() => getLabelMonth()}</span>
        </div>
    );
};

export default PaymentItem;