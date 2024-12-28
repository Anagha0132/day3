
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Elbat = () => {
  return (
      <div>
          <TableContainer component={Paper}>
          <Table  border='2'>
          <TableHead>
          <TableRow>
              <TableCell><b>MAINCOURSE</b></TableCell>
              <TableCell ><b>Calories</b></TableCell>
              <TableCell ><b>Fat&nbsp;(g)</b></TableCell>
              <TableCell><b>Carbs&nbsp;(g)</b></TableCell>
              <TableCell ><b>Protein&nbsp;(g)</b></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
                          <TableCell>Biriyani</TableCell>  
                          <TableCell>200</TableCell>
                          <TableCell>20</TableCell>
                          <TableCell>70</TableCell>
                          <TableCell>80</TableCell>
        </TableRow>
                  </TableBody>
                  </Table>
                  </TableContainer>
        
              
     </div>
  )
}

export default Elbat
