import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa'; // Import Font Awesome icons

const NavItem = ({ icon, children, active, onClick }) => {
  // Get the icon component dynamically
  const IconComponent = FaIcons[icon];
  
  return (
    <Flex
      align="center"
      px="5"
      py="12"
      cursor="pointer"
      fontWeight={active ? "bold" : "medium"}
      color={active ? "#3182CE" : "rgba(0, 0, 0, 0.48)"}
      bg={active ? "#EBF8FF" : "transparent"}
      borderRadius="md"
      _hover={{ bg: "#EBF8FF", color: "#3182CE" }}
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {IconComponent && <Icon as={IconComponent} mr="3" fontSize="16" />}
      <Text fontSize="sm">{children}</Text>
    </Flex>
  );
};

export default NavItem;