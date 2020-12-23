import React from 'react'
import { Typography } from 'antd';


const Header = () => {
    const { Title } = Typography;

    return (
        <Title style={{textAlign:'center', paddingTop: 25}}>Expense Tracker</Title>
    )
}

export default Header
