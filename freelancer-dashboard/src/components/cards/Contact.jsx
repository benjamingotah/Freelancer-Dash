import React from "react";
import { 
  Box, 
  Flex, 
  Text, 
  HStack, 
  Icon,
  VStack,
  Button,
  Link
} from '@chakra-ui/react';
import { 
  FaMapMarkerAlt, 
  FaDollarSign, 
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaUserPlus,
  FaComment
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const Contact = () => {
  const profileData = {
    name: "Benjamin Gotah",
    title: "Senior UI/UX Designer & Frontend Developer",
    avatar: "/src/assets/pic.jpg",
    location: "San Francisco, CA, USA",
    availabilityStatus: "Available for work",
    hourlyRate: "$95/hr",
    contactInfo: {
      email: "benjamngotah.com",
      phone: "+1 (415) 555-0192",
      website: "benjamingotah.design",
      linkedin: "linkedin.com/in/alexmorgan",
      github: "github.com/benjamingotah"
    }
  };

  const contactItems = [
    { icon: FaMapMarkerAlt, text: profileData.location },
    { icon: FaDollarSign, text: profileData.hourlyRate },
    { icon: FaGlobe, text: profileData.contactInfo.website, isLink: true },
    { icon: FaPhone, text: profileData.contactInfo.phone },
    { icon: FaEnvelope, text: profileData.contactInfo.email, isLink: true },
    { icon: FaLinkedin, text: profileData.contactInfo.linkedin, isLink: true },
    { icon: FaGithub, text: profileData.contactInfo.github, isLink: true }
  ];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg="#ffff" // Pure white background
      p={20}
      mb={10}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      flexDirection={"column"}
      borderRadius="20px"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
      width="100%"
      maxWidth="600px"
      mx="auto"
      h={"100%"}
    >
      <Text 
        fontWeight={"bold"}fontSize={"20"}   // Dark gray
        mb={6}
        textAlign="center"
      >
        Contact Information
      </Text>
      
      <VStack spacing={5} align="stretch">
        {contactItems.map((item, index) => (
          <MotionBox
            key={index}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HStack spacing={4}>
              <Box
                p={2}
                borderRadius="100"
                // bg="#EBF8FF" 
              >
                <Icon as={item.icon} color="" // Medium blue
                  boxSize={20}  />
              </Box>
              {item.isLink ? (
                <Link
                  href={item.icon === FaEnvelope ? `mailto:${item.text}` : `https://${item.text}`}
                  color="#0369A1" // Blue link color
                  fontSize="16px"
                  isExternal
                  _hover={{ 
                    textDecoration: "none", 
                    color: "#2B6CB0" // Darker blue on hover
                  }}
                >
                  {item.text}
                </Link>
              ) : (
                <Text color="#4A5568" // Gray text
                  fontSize="16px">
                  {item.text}
                </Text>
              )}
            </HStack>
          </MotionBox>
        ))}
      </VStack>

      <Flex mt={8} justify="center" gap={4}>
        <MotionButton
          leftIcon={<FaUserPlus />}
          bg="#000" // Blue button
          color="#FFFFFF" // White text
          size="md"
          p={4}
          width={"max-content"}
          h={"max-content"}
          borderRadius={15}
          _hover={{ bg: "#2C5282" }} // Darker blue on hover
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </MotionButton>
        <MotionButton
          leftIcon={<FaComment />}
          variant="outline"
          borderColor="#3182CE" // Blue border
          color="#374151" // Blue text
          size="md"
          ml={"10"}
          width={"max-content"}
          h={"max-content"}
          _hover={{ 
            bg: "#EBF8FF", // Light blue background
            color: "#2C5282", 
            
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Message
        </MotionButton>
      </Flex>

      <Box mt={8} textAlign="center">
        <Text fontSize="14px" color="#718096">
        </Text>
      </Box>
    </MotionBox>
  );
};

export default Contact;