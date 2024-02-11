import { Box, Typography } from '@mui/material'
import { display, fontSize, fontWeight } from '@mui/system'
import React from 'react'

function ViewPost() {
  return (
    <Box sx={{padding:'50px'}}>
      
            <Box sx={{ borderBottom: '2px solid #979DAD' }}> 
                <Typography sx={{fontSize:'32px',
                                fontWeight:'bold', 
                                color:'#000000',
                                
                                }}>
                    What is Arduino ?
                </Typography>
            </Box>


            <Box>
                <Box sx={ {display:'flex' , justifyContent:'space-between',}}>    
                    <Box sx={{  display: 'flex', flex: 1, }}>
                        <Box></Box>
                        <Box>
                            <Typography sx={{fontSize:16 , fontWeight:'medium', color: '#000000' , marginRight:'15px'}}>Shaveen Maleesha</Typography>
                            <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}}>3 Hours ago</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}} >05 Views</Typography>

                </Box>
                


                <Box sx={{ marginBottom:'15px'}}>
                    <Typography sx={{ fontSize:16,fontWeight:'regular',color:'#40485BD',height:'100px'}}>So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as...'ve been trying to interface a GSM 900 module with an Arduino Duemilanove using the following code. The GSM module is working perfectly in hyper terminal and I've checked that the TX, RX and GND connections are proper as well. However, when I try to connect it to the Arduino board, I get no response, even if I set the delay to 10 seconds. Could it be a code problem? </Typography>
                </Box>
                

            </Box>
       <Box sx={{borderBottom:'2px solid #979DAD'}}></Box>

       <Box>
                <Box> </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', marginTop: '20px', marginBottom: '15px' }}>
                05 Comments
                </Typography> 
                <Typography sx={{ fontSize: '16px', fontWeight: 'regular', marginTop: '20px', marginBottom: '15px' , borderBottom:'1px solid #979DAD'}}>  Add Comment...
                </Typography>

                <Box sx={{ borderBottom: '1px solid #979DAD', marginTop: '20px' }}></Box>
        </Box>

        <Box>
                <Box> </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', marginTop: '20px', }}>
                Chathurya Abeyrathne  
                </Typography> 
                <Typography sx={{fontSize:14 , fontWeight:'medium', color: '#7E8597'}}>3 Hours ago</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: 'regular', marginTop: '20px', marginBottom: '15px' }}>  If that's all of your code then how do you communicate with the shield?If that's all of your code then how do you communicate with the shield?
Try the link in my signature might give you more help.
                </Typography>

                <Box sx={{ borderBottom: '1px solid #979DAD', marginTop: '20px' }}></Box>
        </Box>

    </Box>
    
    
  )
}

export default ViewPost
