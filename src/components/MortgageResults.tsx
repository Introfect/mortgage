import { initialMortgageConstraintsType } from "./MortgageCalculator"


type Props = {
    mortgageConstraints:initialMortgageConstraintsType
}

function MortgageResults({mortgageConstraints}: Props) {

  const yearlyRepayments=mortgageConstraints.monthlyRepayment * 12 * mortgageConstraints.mortgageTerm
  return (
    <div className="bg-gray-800 p-8 w-full lg:w-80 text-white rounded-bl-3xl">
    <h3 className="text-xl font-semibold mb-4">Your results</h3>
    <div className="mb-4">
      <p className="text-sm text-gray-400">Monthly repayments</p>
      <p className="text-4xl text-yellow-500 font-bold">£{mortgageConstraints.monthlyRepayment.toFixed(2)}</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">Total repayment</p>
      <p className="text-2xl font-semibold">£{yearlyRepayments.toFixed(2)}</p>
    </div>
  </div>
  )
}

export default MortgageResults