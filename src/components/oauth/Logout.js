import React, {useState} from 'react'
import { useGoogleLogout } from 'react-google-login'
import { Button, Typography } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 
import LoginButton from './LoginButton'

const clientId =
  '801993652344-tlkqg3r43lv3b3bk45msa9qf2j5r2v14.apps.googleusercontent.com'

const Logout = () => {

  const { Title } = Typography

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success')
    alert('Logged out Successfully ✌')
    reload()
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  const reload = () => {
    window.location.reload(false);
  }

  return (
    <>
      <Button 
        onClick={signOut}
        className='logoutBtn'
      >
        <Title level={5}>
          <LogoutOutlined style={{paddingRight: 10}}/>Sign out
        </Title>
      </Button>
    </>
  )
}

export default Logout