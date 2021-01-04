import React, { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../utils/refreshToken'
import LoginButton from './LoginButton'


const clientId =
  '801993652344-tlkqg3r43lv3b3bk45msa9qf2j5r2v14.apps.googleusercontent.com'


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
      visible ? <LoginButton signIn={signIn}/> : ''
    )
}

export default Login

// code source is from https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del