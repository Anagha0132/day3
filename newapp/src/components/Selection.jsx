import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Selection = () => {
    var [name, setname] = useState()
    const anagha = () => {
        setname(" Anagha")
    }
    const vasma = () => {
        setname(" Vasma")
    }
    const amina = () => {
        setname(" Amina")
    }
    // useEffect(() => { }, [])
    useEffect(() => {
        anagha()
    }, [])
  return (
    <div>
          <Typography variant='h3'>Welcome{name}</Typography>
          <Button variant='contained' color='inherit' onClick={anagha}>Anagha</Button>&nbsp;&nbsp;
          <Button variant='contained' color='inherit' onClick={vasma}>Vasma</Button>&nbsp;&nbsp;
          <Button variant='contained' color='inherit' onClick={amina}>Amina</Button>
    </div>
  )
}

export default Selection
