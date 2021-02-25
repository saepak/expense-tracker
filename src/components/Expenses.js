import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from 'antd'
import { Statistic } from 'antd'
import Graph from './Graph'

const Expenses = () => {

    const { Title } = Typography
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    
    const total = amounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2)

    return (
        <div className='expenseBox'>
            <Title 
                level={4} 
                className='title'
            >
                Balance
            </Title>

            <div className='expense-num'>
                <h1 className='totalBalance'>
                    ${total}
                </h1>

                <div className="inc-exp-container">
                    <div>
                        <Statistic 
                        title="Income" 
                        value={income} 
                        prefix="$"
                        valueStyle={{ color: '#fff' }}
                        />
                    </div>
                    <div>
                        <Statistic 
                        title="Expense" 
                        value={expense} 
                        prefix="$"
                        valueStyle={{ color: '#fff' }}
                        />
                    </div>
                </div>

                <div className='graph-btn-box'>
                    <Graph />
                </div>


            </div>
        </div>
    )
}

export default Expenses
