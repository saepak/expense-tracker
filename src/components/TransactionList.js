import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
import { Typography } from 'antd'

const TransactionList = () => {

    const { Title } = Typography
    const {transactions} = useContext(GlobalContext)

    return (
        <div>
            <Title level={5} className='title'>
                History
            </Title>
            <ul className="list">
                {transactions.map(transaction => (
                        <Transaction 
                            key={transaction.id} 
                            transaction={transaction}
                        />
                    )
                )}
            </ul>
        </div>
    )
}

export default TransactionList