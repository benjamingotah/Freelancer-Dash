import React from 'react';
import { Box, Flex, Text, Avatar, VStack, HStack, Icon, SimpleGrid, Badge, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { StarIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const FeedbackCards = () => {
  // Feedback data with consistent styling
  const feedbacks = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      clientCompany: 'TechSolutions Inc.',
      clientAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'May 15, 2023',
      rating: 5,
      status: 'Verified',
      comment: 'Exceptional service! The team went above and beyond to deliver our project ahead of schedule.',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      statusColor: '#F0FDF4'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      clientCompany: 'Digital Innovations LLC',
      clientAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'April 28, 2023',
      rating: 4,
      status: 'Verified',
      comment: 'Great communication and solid deliverables. Would work with them again!',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      statusColor: '#FFF7ED'
    },
    // {
    //   id: 3,
    //   clientName: 'Alexis Rodriguez',
    //   clientCompany: 'Creative Minds Agency',
    //   clientAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    //   date: 'June 2, 2023',
    //   rating: 5,
    //   status: 'New',
    //   comment: 'Absolutely flawless execution. The attention to detail was impressive.',
    //   cardBg: '#FFFFFF',
    //   borderColor: '#E2E8F0',
    //   statusColor: '#DD6B20'
    // },
    {
      id: 4,
      clientName: 'David Wilson',
      clientCompany: 'Enterprise Solutions',
      clientAvatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      date: 'July 10, 2023',
      rating: 5,
      status: 'Verified',
      comment: 'Transformed our digital presence completely. Exceeded all expectations.',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      statusColor: '#F0FDF4'
    },
    {
      id: 4,
      clientName: 'Benjamin Gotah',
      clientCompany: 'Enterprise Solutions',
      clientAvatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      date: 'July 10, 2023',
      rating: 5,
      status: 'New',
      comment: 'Transformed our digital presence completely. Exceeded all expectations.',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      statusColor: '#F0F9FF'
    },
    {
      id: 5,
      clientName: 'Emma Thompson',
      clientCompany: 'StartUp Ventures',
      clientAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: 'August 5, 2023',
      rating: 4,
      status: 'Verified',
      comment: 'Reliable partner with excellent technical expertise. Delivered on time and on budget.',
      cardBg: '#FFFFFF',
      borderColor: '#E2E8F0',
      statusColor: '#FFF7ED'
    }
  ];

  // Consistent color scheme matching project cards
  const colors = {
    textPrimary: '#1A202C',
    textSecondary: '#718096',
    textTertiary: '#A0AEC0',
    border: '#E2E8F0',
    ratingFilled: '#F6AD55',
    ratingEmpty: '#E2E8F0'
  };

  const MotionBox = motion(Box);

  return (
    <Box>
     

    <SimpleGrid display={"flex"} flexWrap={"wrap"} columns={[1, 2, 3] } spacing={15} p={8} >
      {feedbacks.map((feedback) => (
        <MotionBox
          key={feedback.id}
          bg={feedback.cardBg}
          borderRadius="12px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
          display={"flex"}
         flexWrap={"wrap"}
         justifyContent={"space-between"}
        //  flexDirection={"column"}
          borderColor={feedback.borderColor}
          p={10}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" 
          }}
          transition={{ duration: 0.2 }}
        >
          <Flex justify="space-between" align="flex-start" mb={4}>
            <Flex align="center">
              <Avatar 
                size="sm"
                name={feedback.clientName}
                src={feedback.clientAvatar}
                width={"50px"}
                borderRadius={"100"}
                mr={4}
                border="2px solid white"
                boxShadow="md"
              />
              <VStack align="flex-start" spacing={0}>
                <Text 
                  fontWeight="600" 
                  fontSize="md" 
                  color={colors.textPrimary}
                >
                  {feedback.clientName}
                </Text>
                <Text 
                  fontSize="sm" 
                  color={colors.textSecondary}
                >
                  {feedback.clientCompany}
                </Text>
              </VStack>
            </Flex>
            <Badge 
              bg={feedback.statusColor}
              color="#000"
              w={"max-content"}
              p={"10"}
              borderRadius="12px"
              px={2}
              py={1}
              fontSize="xs"
            >
              {feedback.status}
            </Badge>
          </Flex>

          <HStack spacing={1} mb={4}>
            {Array(5).fill("").map((_, i) => (
              <Icon 
                key={i} 
                as={StarIcon} 
                color={i < feedback.rating ? colors.ratingFilled : colors.ratingEmpty} 
                boxSize={12} 
              />
            ))}
            <Text fontSize="sm" color={colors.textSecondary} ml={1}>
              ({feedback.rating}.0)
            </Text>
          </HStack>

          <Text 
            fontSize="sm" 
            color={colors.textPrimary}
            mb={4}
            lineHeight="tall"
          >
            {feedback.comment}
          </Text>

          <Flex justify="space-between" align="center">
            <Text fontSize="xs" color={colors.textTertiary}>
              {feedback.date}
            </Text>
            <Box>
              <Text fontSize="xs" color={colors.textTertiary} display="inline" mr={1}>
                Project:
              </Text>
              <Text fontSize="xs" color={colors.textSecondary} display="inline" fontWeight="500">
                {feedback.id % 2 === 0 ? 'E-commerce Platform' : 'Mobile App'}
              </Text>
            </Box>
          </Flex>
        </MotionBox>
      ))}
    </SimpleGrid>
    <Flex justify="center" mt={12} mb={6}>
        <Button 
          rightIcon={<ArrowForwardIcon />}
          colorScheme="orange"
          variant="outline"
          size="lg"
          px={8}
          _hover={{
            transform: 'translateX(4px)',
            bg: 'orange.50'
          }}
          transition="all 0.2s"
        >
          View All Testimonials
        </Button>
      </Flex>
    </Box>
  );
};

export default FeedbackCards;



