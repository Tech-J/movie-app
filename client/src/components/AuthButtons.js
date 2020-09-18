import React from 'react'
import { Button } from 'reactstrap'

function AuthButtons() {
  return (
    <>
      <Button color="primary" className="mr-1" href="/login">LogIn</Button>
      <Button color="success" href="/signup">SignUp</Button>
    </>
  )
}

export default AuthButtons
