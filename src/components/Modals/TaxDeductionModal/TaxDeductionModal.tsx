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

                <div className="card-container">
                    <CalculateTaxInput/>
                    <EarlyPayments/>
                </div>

                <div className="card-footer">

                    <div className="reduce">
                        <p>Что уменьшаем?</p>
                        <div className="reduce-container">
                            <div className="budge active">
                                Платеж
                            </div>
                            <div className="budge">
                                Срок
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaxDeductionModal;
