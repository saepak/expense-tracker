import React, { useState } from 'react'
import { Typography } from 'antd'
import AddForm from './AddForm'

const AddTransaction = () => {

    const { Title } = Typography

    return (
        <div className='add-list'>
            <div className='title-container'>
                <Title level={5} className='title'>
                    Add new transaction
                </Title>
            </div>
            <AddForm /> 
        </div>
    )
}

export default AddTransaction
