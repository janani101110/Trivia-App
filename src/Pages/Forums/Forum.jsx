import React from 'react'
import QuestionCard from '../../Component/QuestionCard/QuestionCard'
import { Box } from '@mui/material'

export const Forum= () => {
  return (
    <Box sx={{padding:'50px'}}>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
    </Box>
    
  )
}
