import React, { useReducer, useState } from 'react';
import MortgageResults from './MortgageResults';
import MortgageConstraintsInput from './MortgageConstraintsInput';
import mortgageConstraintsReducer from '../lib/mortgageConstraintsReducer';

export type initialMortgageConstraintsType={
  mortgageAmount:number,
  mortgageTerm:number,
  mortgageInterestRate:number,
  interestOnly:boolean
}

const initialMortgageConstraints:initialMortgageConstraintsType={
  mortgageAmount:0,
  mortgageTerm:0,
  mortgageInterestRate:0,
  interestOnly:false
}
const MortgageCalculator: React.FC = () => {
  const [mortgageConstraints, dispatch]=useReducer(mortgageConstraintsReducer, initialMortgageConstraints)
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<number>(0);

  const calculateRepayments = () => {
    console.log(mortgageConstraints)
if(mortgageConstraints.mortgageAmount==0 || mortgageConstraints.mortgageTerm==0 || mortgageConstraints.mortgageInterestRate==0){
  setMonthlyPayment(0);
  setTotalRepayment(0);
  return
}
    const monthlyRate = mortgageConstraints.mortgageInterestRate / 100 / 12;
    const numPayments = mortgageConstraints.mortgageTerm * 12;
    
    let monthlyAmount;
    if (mortgageConstraints.interestOnly) {
      monthlyAmount = mortgageConstraints.mortgageAmount * monthlyRate;
    } else {
      monthlyAmount = mortgageConstraints.mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }
    

    setMonthlyPayment(monthlyAmount);
    setTotalRepayment(monthlyAmount * numPayments);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row px-2">
        <MortgageConstraintsInput dispatch={dispatch} mortgageConstraints={mortgageConstraints} calculateRepayments={calculateRepayments}/>
        <MortgageResults totalRepayment={totalRepayment} monthlyPayment={monthlyPayment}/>
      </div>
    </div>
  );
};

export default MortgageCalculator;