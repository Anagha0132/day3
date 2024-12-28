import{Button,AppBar,Toolbar, Typography}from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
          <AppBar color='inherit'>
              <Toolbar>
          <Typography variant='h6'>Registration</Typography>&nbsp;&nbsp;
                   <Link to='/Login'>
                  <Button variant='contained' color='secondary'>Login</Button>
          </Link>&nbsp;&nbsp;
                  <Link to='/Signup'>
                      <Button variant='contained' color='secondary'>Sign in</Button>
          </Link>&nbsp;&nbsp;
                  <Link to='/Elbat'>
            <Button variant='contained' color='secondary'>Table</Button>
          
          </Link>&nbsp;&nbsp;
          <Link to='/statebasics'>
          <Button variant='contained' color='secondary'>StateBasics</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/counter'>
            <Button variant='contained' color='secondary'>Counter</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/selection'>
            <Button variant='contained' color='secondary'>Selection</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/api'>
            <Button variant='contained' color='secondary'>Api</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/product'>
            <Button variant='contained' color='secondary'>Product</Button>
          </Link>

              </Toolbar>
              
              
          </AppBar><br/><br/>
    </div>
  )
}

export default NavBar
