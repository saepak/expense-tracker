import React from 'react'
import { useGoogleLogout } from 'react-google-login'
import { Button, Typography } from 'antd'

const clientId =
  '801993652344-tlkqg3r43lv3b3bk45msa9qf2j5r2v14.apps.googleusercontent.com'

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success')
    alert('Logged out Successfully ✌')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <Button onClick={signOut}>
      <Typography className="buttonText">Sign out</Typography>
    </Button>
  );
}

export default Logout