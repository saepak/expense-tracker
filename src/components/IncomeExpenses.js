import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from 'antd'

const IncomeExpenses = () => {

    const { Title } = Typography
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <Title level={5}>Income</Title>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <Title level={5}>Expense</Title>
                <p className="money minus">${expense}</p>
            </div>
      </div>
    )
}

export default IncomeExpenses