import { Typography } from '@mui/material'
import React from 'react'

const Title = ({PREVIEW_SECTION_TITLE}) => {
  return (
    <>
    <Typography variant='h4' sx={{color:"white"}}>{PREVIEW_SECTION_TITLE}</Typography>
    </>
  )
}

export default Title