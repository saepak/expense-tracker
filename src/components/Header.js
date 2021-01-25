import React from 'react'
import { Typography } from 'antd'
import { HiCurrencyDollar } from 'react-icons/hi';


const Header = () => {
    
    const { Title } = Typography

    return (
        <Title 
            level={2} 
            className='header'
        >
           <HiCurrencyDollar style={{marginBottom: -5}} /> My Expense Manager 
        </Title>
    )
}

export default Header
