import {Button,TextField ,Typography} from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <Typography variant="h3">SIGNUP PAGE</Typography><br/><br/>
          <TextField label="username" variant='outlined' /><br/><br />
          <TextField label="Password" variant='outlined'/><br/><br/>
          <Button variant='contained'color='inherit' >Signup</Button>
    </div>
  )
}

export default Signup

