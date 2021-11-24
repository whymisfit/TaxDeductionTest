import React from 'react';

const EarlyPayments: React.FC = () => {
    return (
        <div>
            Итого можете внести в качестве досрочных:

            <div>
                <input type="checkbox"/>
                <p>78 000 рублей</p>
                <span>в 1-ый год</span>
            </div>
        </div>
    );
};

export default EarlyPayments;