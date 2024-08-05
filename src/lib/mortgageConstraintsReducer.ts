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
            return{
                ...mortgage,
                mortgageAmount:0,
                mortgageTerm:0,
                mortgageInterestRate:0,
                interestOnly:false
            }
        }
        default:{
            throw new Error("case not defined")
        }
    }
}