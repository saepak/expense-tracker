import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { DeleteOutlined } from '@ant-design/icons'

const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span className='number'>{sign}${Math.abs(transaction.amount)}</span>
            <button 
                onClick={()=> deleteTransaction(transaction.id)}
                className="delete-btn">
                    <DeleteOutlined style={{color: '#999'}} />
            </button>


        </li>
    )
}

export default Transaction