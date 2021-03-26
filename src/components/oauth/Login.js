import React, { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../utils/refreshToken'
import LoginButton from './LoginButton'
import Logout from './Logout'

const clientId =
  '801993652344-1pa0s8f8ksto4f6ld6sl71t6m5set36v.apps.googleusercontent.com'


const Login = () => {

    const [visible, setVisible] = useState(true)

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj)
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍`
        // );
        refreshTokenSetup(res)
        setVisible(false)

    }
    
    const onFailure = (res) => {
      console.log('Login failed: res:', res)
      alert(
        `Failed to login. 😢 `
      )
    }

    const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline',
    })

    return (
      visible ? <LoginButton signIn={signIn}/> : <Logout />
    )
}

export default Login

// code source is from https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del