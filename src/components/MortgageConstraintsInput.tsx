import { Dispatch} from 'react'
import { initialMortgageConstraintsType } from './MortgageCalculator';

type Props = {
    dispatch:Dispatch<{ type: string; value: number }>,
    mortgageConstraints:initialMortgageConstraintsType,
}

function MortgageConstraintsInput({dispatch,mortgageConstraints}: Props) {

 const handleDispatch=(type: string, value: number)=>{
  dispatch({
    type,
    value
  })

 }
 

 const handleClear=(type: string, value: number)=>{
  dispatch({
    type,
    value
  })
 }
const handleCalculate=(type: string, value: number)=>{
  dispatch({
    type,
    value
  })
}
  return (
    <div className="p-8 w-96">
    <div className='flex justify-between items-center mb-2'>
    <h2 className="text-2xl font-bold">Mortgage Calculator</h2>
    <button 
    onClick={()=>handleClear("clear",0)}
    type='button' 
    className='text-gray-300 underline text-xs'>Clear All</button>

    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Mortgage Amount</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">£</span>
        </div>
        <input
          type="number"
          value={mortgageConstraints.mortgageAmount}
          onChange={(e) => handleDispatch("mortgageAmountChange",Number(e.target.value))}
          className=" pl-6 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <div className="mb-4 flex space-x-4">
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700">Mortgage Term</label>
        <input
        type="number"
          value={mortgageConstraints.mortgageTerm}
          onChange={(e) => handleDispatch("mortgageTermChange",Number(e.target.value))}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
        </input>
      </div>
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700">Interest Rate</label>
        <input
          type="number"
          step="0.01"
          max={100}
          value={mortgageConstraints.mortgageInterestRate}
          onChange={(e) => handleDispatch("mortgageInterestRateChange",Number(e.target.value))}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Mortgage Type</h2>
      <div className="space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            className={`flex items-center p-2 border ${mortgageConstraints.interestOnly ? 'bg-yellow-200' : 'bg-white'}`}
            checked={!mortgageConstraints.interestOnly}
            onChange={() => handleDispatch("mortgageTypeChange",0)}
          />
          <span className="text-gray-700">Repayment</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            className={`flex items-center p-2 border ${mortgageConstraints.interestOnly ? 'bg-yellow-200' : 'bg-white'}`}
            checked={mortgageConstraints.interestOnly}
            onChange={() => handleDispatch("mortgageTypeChange",0)}
          />
          <span className="text-gray-700">Interest Only</span>
        </label>
      </div>
    </div>
    <button
    type='button'
            onClick={()=>handleCalculate("calculateRepayments",0)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Calculate Repayments
          </button>
  </div>
  )
}

export default MortgageConstraintsInput