import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { Button, Typography } from 'antd'
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '801993652344-tlkqg3r43lv3b3bk45msa9qf2j5r2v14.apps.googleusercontent.com'


const Login = () => {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍`
        );
        refreshTokenSetup(res);
      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
      };
    
      const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
      });

    return (
        <div>
            <Button onClick={signIn} >
                <Typography>Sign in with Google</Typography>
            </Button>
        </div>
    )
}


export default Login

// code source is from https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del