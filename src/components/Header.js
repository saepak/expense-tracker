import React from 'react'
import { Typography } from 'antd';


const Header = () => {
    const { Title } = Typography;

    return (
        <Title level={2} style={{textAlign:'center', paddingTop: 25}}>My Expense Manager</Title>
    )
}

export default Header
