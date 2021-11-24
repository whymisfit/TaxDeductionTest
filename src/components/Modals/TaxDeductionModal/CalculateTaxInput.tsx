import React from 'react';

const CalculateTaxInput: React.FC = () => {
    return (
        <div className="input-group">
            <label className="label">Ваша зарплата в месяц</label>
            <input type="text"
                   placeholder="Введите данные"/>
            <button className="link red">Рассчитать</button>
        </div>
    );
};

export default CalculateTaxInput;