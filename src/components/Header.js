import React from 'react'
import { Typography } from 'antd';


const Header = () => {
    
    const { Title } = Typography;

    return (
        <Title 
            level={2} 
            className='header'
        >
            My Expense Manager
        </Title>
    )
}

export default Header
