import React from 'react'

//material-ui
import { Button, Typography } from '@mui/material'

const CalcButton = ({ value, handleClick, type }) => {
  
  return (
    <Button
      sx={{ backgroundColor: "black" }}
      variant="contained"
      color="primary"
      onClick={(e) => handleClick(e)} 
      size='small'     
      id={type}
    >
      <Typography variant="body2" id={type} sx={{ color: "white" }}>
        {value}
      </Typography>
    </Button>
  )

}

export default CalcButton

