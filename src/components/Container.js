import React from 'react'
import Header from './Header'
import Logout from './oauth/Logout'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import AddTransaction from './AddTransaction'
import TransactionList from './TransactionList'

const Container = () => {
    return (
        <div className='container'> 
            <Header />
            <Logout />
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
            <TransactionList />
        </div>
    )
}

export default Container