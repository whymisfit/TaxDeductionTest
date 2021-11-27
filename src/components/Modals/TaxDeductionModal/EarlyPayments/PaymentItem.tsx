import React from 'react';
import {TaxPayment} from "../../../../store/reducers/taxDeductionReducer/types";

interface IPaymentItem {
    payment: TaxPayment,
    id: number,
}


const PaymentItem: React.FC<IPaymentItem> = ({payment, id}: IPaymentItem) => {

    const getLabelMonth = () => {
        console.log(123)
        switch (id) {
            case 2: {
                return "во 2-ой год";
            }
            case 3: {
                return "в 3-ий год";
            }
            default: {
                return `в ${id}-ый год`;
            }
        }
    }

    return (
        <div className="payments-item">
            <input type="checkbox"/>
            <p className="payments-item-value">{payment.value} рублей</p>
            <span className="payments-item-desc">{getLabelMonth()}</span>
        </div>
    );
};

export default PaymentItem;
