import { initialMortgageConstraintsType } from "../components/MortgageCalculator";

export default function mortgageConstraintsReducer(mortgage:initialMortgageConstraintsType, action:{type:string,value:number}){
    switch(action.type){
        case"mortgageAmountChange":{
            return{
                ...mortgage,
                mortgageAmount:action.value

            }
        }
        case "mortgageTermChange":{
            return{
                ...mortgage,
            mortgageTerm:action.value
            }
        }
        case "mortgageInterestRateChange":{
            return{
                ...mortgage,
                mortgageInterestRate:action.value
            }
        }
        case "mortgageTypeChange":{
            return{
                ...mortgage,
                interestOnly:!mortgage.interestOnly
            }
        }
        case "clear":{
            const newState={
                mortgageAmount:0,
                mortgageTerm:0,
                mortgageInterestRate:0,
                interestOnly:false,
                monthlyRepayment:0

            }
            return newState
        }
        case "calculateRepayments":{
            const monthlyRate = mortgage.mortgageInterestRate / 100 / 12;
            const numPayments = mortgage.mortgageTerm * 12;
            
            let monthlyAmount;
            if (mortgage.interestOnly) {
              monthlyAmount = mortgage.mortgageAmount * monthlyRate;
            } else {
              monthlyAmount = mortgage.mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
            }
            return{
                ...mortgage,
                monthlyRepayment:monthlyAmount

            }
        }
        default:{
            throw new Error("case not defined")
        }
    }
}