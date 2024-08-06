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
  // const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  // const [totalRepayment, setTotalRepayment] = useState<number>(0);

//  const calculateRepayments= ()=> {
//     console.log(mortgageConstraints)
// if(mortgageConstraints.mortgageAmount==0 || mortgageConstraints.mortgageTerm==0 || mortgageConstraints.mortgageInterestRate==0){
//   console.log("inside if")
//   setMonthlyPayment(0);
//   setTotalRepayment(0);
//   return
// }
// console.log("not inside if")
//     const monthlyRate = mortgageConstraints.mortgageInterestRate / 100 / 12;
//     const numPayments = mortgageConstraints.mortgageTerm * 12;
    
//     let monthlyAmount;
//     if (mortgageConstraints.interestOnly) {
//       monthlyAmount = mortgageConstraints.mortgageAmount * monthlyRate;
//     } else {
//       monthlyAmount = mortgageConstraints.mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
//     }
    

//     setMonthlyPayment(monthlyAmount);
//     setTotalRepayment(monthlyAmount * numPayments);
//   }

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