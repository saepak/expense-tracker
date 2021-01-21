import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { DeleteOutlined } from '@ant-design/icons'
import { Modal, Button } from 'antd'


const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }
  
    const handleOk = () => {
      deleteTransaction(transaction.id)
      setIsModalVisible(false)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
    }

    const sign = transaction.amount < 0 ? '-' : '+'
    const amountNum = Math.abs(transaction.amount).toLocaleString()
    

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} 
            <span className='number'>
              {sign}${amountNum}
            </span>

            <Button 
                type='text'
                onClick={showModal}
                className='delete-btn'>
                    <DeleteOutlined style={{color: '#999'}} />
            </Button>
            <Modal title='Delete' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you want to delete this transaction?</p>
            </Modal>
        </li>
    )
}

export default Transaction