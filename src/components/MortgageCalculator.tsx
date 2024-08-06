import React, { useReducer} from 'react';
import MortgageResults from './MortgageResults';
import MortgageConstraintsInput from './MortgageConstraintsInput';
import mortgageConstraintsReducer from '../lib/mortgageConstraintsReducer';

export type initialMortgageConstraintsType={
  mortgageAmount:number,
  mortgageTerm:number,
  mortgageInterestRate:number,
  interestOnly:boolean,
  monthlyRepayment:number
}

const initialMortgageConstraints:initialMortgageConstraintsType={
  mortgageAmount:0,
  mortgageTerm:0,
  mortgageInterestRate:0,
  interestOnly:false,
  monthlyRepayment:0
}
const MortgageCalculator: React.FC = () => {
  const [mortgageConstraints, dispatch]=useReducer(mortgageConstraintsReducer, initialMortgageConstraints)


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row px-2">
        <MortgageConstraintsInput dispatch={dispatch} mortgageConstraints={mortgageConstraints} />
        <MortgageResults mortgageConstraints={mortgageConstraints}/>
      </div>
    </div>
  );
};

export default MortgageCalculator;