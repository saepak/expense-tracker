import React,{useState} from 'react'
import { useGoogleLogout } from 'react-google-login'
import { Button, Typography } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 

const clientId =
  '801993652344-1pa0s8f8ksto4f6ld6sl71t6m5set36v.apps.googleusercontent.com'

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
    <div className='logout-box'>
      <Button 
        onClick={signOut}
        className='logoutBtn'
      >
        <Title level={5}>
          <LogoutOutlined style={{paddingRight: 10}}/>Sign out
        </Title>
      </Button>
    </div>
  )
}

export default Logout