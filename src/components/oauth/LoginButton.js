import React from 'react'
import { Button, Typography } from 'antd'
import {GoogleCircleFilled} from '@ant-design/icons'

const LoginButton = (props) => {
    const { Title } = Typography

    return (
        <div className='login-screen'>
        <Button 
            onClick={props.signIn} 
            className='loginBtn'
        >
            <Title level={2}>
                 <GoogleCircleFilled style={{paddingRight: 10, color:'#333'}}/>
                Sign in with Google
            </Title>
        </Button>
    </div>
    )
}


export default LoginButton