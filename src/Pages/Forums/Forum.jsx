import React from 'react'
import QuestionCard from '../../Component/QuestionCard/QuestionCard'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const cardData = [
  {
    id:1, 
      question:" what is ardiono ?",
      userName:"Shaveen Maleesha",
      postTime:"2 Hours ago",
      pQuestion:"So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as.... So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as....",
      Views:" 10 Views",
      Replies:"10 Replies",
      imgURL: require("../../Component/Assets/forum/OIP.jpeg")
  },
  {
    id:2, 
      question:" what is ?",
      userName:"Shaveen Maleesha",
      postTime:"2 Hours ago",
      pQuestion:"So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as.... So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as....",
      Views:" 10 Views",
      Replies:"10 Replies"
    
  },
  {
    id:3, 
      question:" ardiono ?",
      userName:"Shaveen Maleesha",
      postTime:"2 Hours ago",
      pQuestion:"So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as.... So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as....",
      Views:" 10 Views",
      Replies:"10 Replies"
    
  },
  {
    id:1, 
      question:" what is ardiono ?",
      userName:"Shaveen Maleesha",
      postTime:"2 Hours ago",
      pQuestion:"So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as.... So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as....",
      Views:" 10 Views",
      Replies:"10 Replies"
    
  },
 


]


export const Forum= () => {
  return (
    <Box sx={{padding:'50px'}}>
      {cardData.map((item,index)=>(
        
        <Link to="/post" style={{textDecoration:'none'}}>
          <QuestionCard 
          key = {index}
          imgURL = {item.imgURL}
          question = {item.question} 
          userName ={ item.userName} 
          postTime={item.postTime} 
          pQuestion ={item.pQuestion} 
          Views = {item.Views} 
          Replies = {item.Replies} />
        </Link>

      ))}
      
      
    </Box>
    
  )
}
