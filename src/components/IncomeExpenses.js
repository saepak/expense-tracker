import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Statistic } from 'antd'

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <Statistic 
                  title="Income" 
                  value={income} 
                  prefix="$"
                  valueStyle={{ color: '#2ecc71' }}
                />
            </div>
            <div>
                <Statistic 
                  title="Expense" 
                  value={expense} 
                  prefix="$"
                  valueStyle={{ color: '#c0392b' }}
                />
            </div>
      </div>
    )
}

export default IncomeExpenses