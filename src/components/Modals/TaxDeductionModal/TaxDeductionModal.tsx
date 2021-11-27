import React from 'react';
import CloseIcon from "./CloseIcon";
import CalculateTaxInput from "./CalculateTaxInput";
import EarlyPayments from "./EarlyPayments/EarlyPayments";

enum ReduceTypes {
    PAY = "PAY",
    TERM = "TERM",
}

type ReduceSelect = {
    type: ReduceTypes,
}

const TaxDeductionModal: React.FC = () => {

    const [reduceType, setReduceType] = React.useState<ReduceSelect>({type: ReduceTypes.PAY});

    const getActiveBudgeStyle = (type: ReduceTypes) => {
        return type === reduceType.type ? "active" : "";
    }

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

                <div className="card-container">
                    <EarlyPayments/>
                </div>

                <div className="card-footer">

                    <div className="reduce">
                        <p>Что уменьшаем?</p>
                        <div className="reduce-container">
                            <div className={`budge ` + getActiveBudgeStyle(ReduceTypes.PAY)}
                                 onClick={() => setReduceType({type: ReduceTypes.PAY})}>
                                Платеж
                            </div>
                            <div className={`budge ` + getActiveBudgeStyle(ReduceTypes.TERM)}
                                 onClick={() => setReduceType({type: ReduceTypes.TERM})}>
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
