import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeedbackCards from '../components/cards/FeedbackCard.jsx'

export const Feedbacks = () => {

  const MotionBox = motion(Box);
 
  return (
    <MotionBox  initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
       <Box display={"flex"} justifyContent={"center"}  fontSize={"30"} fontWeight={"bold"} mb={"20"}><Text>My Clients' Testimonials</Text></Box>
       <Box>

        <FeedbackCards/>
       </Box>
    </MotionBox>
   
  )
}

export default Feedbacks