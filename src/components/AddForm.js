import React,{ useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Button, Form, Input } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const AddForm = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)
    const [form] = Form.useForm();

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        form.resetFields()

        if (text.length > 0) {
            return addTransaction(newTransaction)
        } else {
            return ''
        }
        
    }

    return (
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

            <Button 
                type="primary"
                htmlType="submit"
                onClick={onSubmit}
                className="btn">
                    Add transaction
            </Button>
        </Form>
    )
}

export default AddForm