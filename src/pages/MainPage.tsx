import React from 'react';
import BigButton from "../components/buttons/BigButton/BigButton";
import TaxDeductionModal from "../components/Modals/TaxDeductionModal/TaxDeductionModal";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";

const MainPage: React.FC = () => {

    const showModal = useSelector((state: RootState) => state.tax.showModal);

    return (
        <div className="main-page container">

            <BigButton/>

            {showModal && <TaxDeductionModal/>}
        </div>
    );
};

export default MainPage;