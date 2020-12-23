import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography, Button } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons' 

const AddTransaction = () => {

    const { Title } = Typography
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [add, setAdd] = useState(false)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

    const addBtn = () => {
        if(add === false) {
            setAdd(true)
        } else {
            setAdd(false)
        }
    }

    const AddForm = () => {
        return (
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <input 
                    type="text" 
                    value={text} 
                    placeholder='Enter new transaction'
                    style={{marginBottom: 10}}
                    onChange={(e)=> setText(e.target.value)} />
                </div>
                <div className="form-control">
                <input 
                    type="number" 
                    value={amount}
                    placeholder='Amount ( -expense, +income)'
                    onChange={(e)=> setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        )
    }

    return (
        <div>
            <div className='title-container'>
                <Title level={5} className='title'>
                    Add new transaction
                </Title>
                <Button onClick={addBtn} className='add-btn'>
                    <PlusSquareOutlined className='add-icon' />
                </Button>
            </div>
            { add ? <AddForm /> : '' }
        </div>
    )
}

export default AddTransaction
