import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Typography, Button, Form, Input } from 'antd'
import Select from 'react-select'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

const AddTransaction = () => {

    const { Title } = Typography
    const [form] = Form.useForm()

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [group, setGroup] = useState('food')
    const [value, setValue] = useState({label:'Food', value:'food'})
    const {addTransaction} = useContext(GlobalContext)


    const options =  [
        {label: 'Food', value: 'food'},
        {label: 'Hobby', value: 'hobby'},
        {label: 'Gift', value: 'gift'},
        {label: 'Util', value: 'util'},
        {label: 'Other', value: 'other'}
    ] 

    const handleChange = (selectedGroup) => {
        setGroup(selectedGroup.value)
    }

    const onSubmit = (e) => {
        
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            group
        }

        form.resetFields()
        setValue({label:'Food', value:'food'})

        if (text.length > 0) {
            return addTransaction(newTransaction)
        } else {
            return ''
        }

    }

    return (
        <div className='add-list'>
            <div className='title-container'>
                <Title level={4} className='title' style={{marginBottom: 12}}>
                    Add new transaction
                </Title>
            </div>

            <Form
                {...layout}
                name="basic"
                form={form}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="transaction"
                    rules={[{ required: true, message: 'Please input your transaction' }]}
                >
                    <Input 
                        type="text" 
                        value={text} 
                        placeholder='Enter new transaction'
                        className='add-input'
                        onChange={(e)=> setText(e.target.value)} 
                    />
                </Form.Item>
                <Form.Item
                    name="amount"
                    rules={[{ required: true, message: 'Please input your amount' }]}
                >
                    <Input 
                        type="number" 
                        value={amount}
                        className='add-input'
                        placeholder='Amount ( -expense, +income)'
                        onChange={(e)=> setAmount(e.target.value)} 
                    />
                </Form.Item>

                <Select 
                    onChange={handleChange}
                    options={options}
                    defaultValue={value}
                    className='select-box'
                />

                <Button 
                    type="primary"
                    htmlType="submit"
                    onClick={onSubmit}
                    className="btn">
                        Add Transaction
                </Button>
            </Form>
        </div>
    )
}

export default AddTransaction
