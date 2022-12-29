import { Typography } from '@mui/material'
import React from 'react'

const Title = ({TITLE}) => {
  return (
    <>
    <Typography variant='h4' sx={{color:"white"}}>{TITLE}</Typography>
    </>
  )
}

export default Title