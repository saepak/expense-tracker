import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from 'antd'


const Balance = () => {

    const { Title } = Typography
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    
    const total = amounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    return (
        <div className='balance'>
            <Title level={5}>Balance</Title>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
