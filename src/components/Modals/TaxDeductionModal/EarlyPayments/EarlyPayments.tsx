import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import PaymentItem from "./PaymentItem";

const EarlyPayments: React.FC = () => {

    const payments = useSelector((state: RootState) => state.tax.payments);

    return payments ? (
            <div>
                Итого можете внести в качестве досрочных:

                {payments?.map((payment, idx) => <PaymentItem id={idx + 1} payment={payment} key={idx}/>)}
            </div>
        )
        :
        null
};

export default EarlyPayments;
