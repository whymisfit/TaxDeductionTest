import React from 'react';
import CloseIcon from "./CloseIcon";
import CalculateTaxInput from "./CalculateTaxInput";
import EarlyPayments from "./EarlyPayments/EarlyPayments";

const TaxDeductionModal: React.FC = () => {

    return (
        <div className="tax-modal">
            <div className="card">
                <CloseIcon/>
                <h4 className="card-title">
                    Налоговый вычет
                </h4>
                <p className="card-description">
                    Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не
                    более 13% от своего официального годового дохода.
                </p>

                <CalculateTaxInput/>

                <EarlyPayments/>

                <button className="btn btn-primary">
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default TaxDeductionModal;