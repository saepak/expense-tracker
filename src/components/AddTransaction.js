import React, { useState } from 'react'

import { Typography, Button } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons' 
import AddForm from './AddForm'

const AddTransaction = () => {

    const { Title } = Typography
    const [add, setAdd] = useState(false)


    const addBtn = () => {
        if(add === false) {
            setAdd(true)
        } else {
            setAdd(false)
        }
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
