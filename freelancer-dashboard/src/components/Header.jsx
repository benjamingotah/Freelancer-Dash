// import React from 'react';
// import pic from '../assets/pic.jpg'
// import { 
//   Flex, 
//   Input, 
//   InputGroup, 
//   InputLeftElement, 
//   HStack, 
//   IconButton,
//   Menu,
//   Text,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
//   Avatar
// } from '@chakra-ui/react';
// import { SearchIcon, BellIcon, SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { FaBars } from 'react-icons/fa';

// const Header = ({ onOpen }) => {
//   return (
//     <Flex
//       as="header"
//       align="center"
//       justify="space-between"
//       w="full"
//       h="60"
//       px={0}
//       py={3}
//       bg="white"
//       borderRadius="15"
//       boxShadow="sm"
//       mb={6}
//     >
//       <Flex align="center">
//         <SearchIcon ml={15} color="#ffff" />
//         {/* <IconButton
//           icon={<FaBars />}
//           variant="ghost"
//           display={{ base: "flex", md: "none" }}
//           onClick={onOpen}
//           aria-label="Open menu"
//           mr={2}
//         /> */}
//         <InputGroup p={9} w={{ base: "160px", md: "260px" }} size="sm">
//           <InputLeftElement pointerEvents="none">
//           </InputLeftElement>
//           <Input h="36" px={20} w="full" bg="#fafafa" placeholder="Search..." borderRadius="30" />
//         </InputGroup>
//       </Flex>

//       <HStack spacing={20}>
//         <IconButton bg="#E2E8F0" borderRadius={50} p={7} _hover={{ bg: "#EBF8FF", color: "#3182CE" }} icon={<BellIcon />} variant="ghost" size="sm" aria-label="Notifications" />
//         <IconButton bg="#E2E8F0" borderRadius={50} p={7} _hover={{ bg: "#EBF8FF", color: "#3182CE" }} icon={<SettingsIcon />} variant="ghost" size="sm" aria-label="Settings" />
//         <Menu>
//           <MenuButton as={Button} size="sm" variant="ghost" rightIcon={<ChevronDownIcon />}>
//             <HStack>
//                <Avatar 
//                           size="lg"
//                           borderRadius="100"
//                           w={35}
//                           name="Alex Morgan" 
//                           src={pic} 
//                           mr={5} 
//                         />
//               <Text display={{ base: "none", md: "block" }}>Alex</Text>
//             </HStack>
//           </MenuButton>
//           <MenuList zIndex={4} borderRadius={25}  bg="#ffff" p={20} >
//             <MenuItem  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Profile</MenuItem>
//             <MenuItem  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Account Settings</MenuItem>
//             <MenuItem  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Billing</MenuItem>
//             <MenuItem  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Help Center</MenuItem>
//             <MenuItem  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Sign Out</MenuItem>
//           </MenuList>
//         </Menu>
        
//       </HStack>
//     </Flex>
//   );
// };

// export default Header;

import React from 'react';
import pic from '../assets/pic.jpg';
import { 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  HStack, 
  IconButton,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaBars } from 'react-icons/fa';

const Header = ({ onOpen }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      ml={15}
      mr={10}
      h={"8vh"}
      px={0}
      py={3}
      bg="white"
      borderRadius="15"
      boxShadow="sm"
      mb={6}

    >
      <Flex align="center">
        <SearchIcon 
          ml={{ base: 2, md: 15 }} 
          color="white" 

          display={{ base: "none", md: "block" }}
        />
        {/* <IconButton
          icon={<FaBars />}
          variant="ghost"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          aria-label="Open menu"
          mr={2}
          ml={2}
        /> */}
        <InputGroup 
          p={{ base: 2, md: 9 }} 
          size="sm"
          ml={50}
          h={"6vh"}
        >
          <InputLeftElement pointerEvents="none" display={{ base: "none", md: "flex" }}>
            {/* <SearchIcon color="gray.500" /> */}
          </InputLeftElement>
          <Input 
            h={{ base: "30px", md: "36px" }} 
            px={{ base: 4, md: 20 }} 
            w="full" 
            bg="#fafafa" 
            p={10}
            placeholder="Search..." 
            borderRadius="30" 
          />
        </InputGroup>
      </Flex>

      <HStack spacing={8}>
        <IconButton 
          bg="#E2E8F0" 
          boxSize={35}
          color={"#DD6B20"}
          borderRadius={50} 
          p={{ base: 4, md: 7 }} 
          _hover={{ bg: "#EBF8FF", color: "#3182CE" }} 
          icon={<BellIcon />} 
          variant="ghost" 
          size="sm" 
          aria-label="Notifications" 
        />
        <IconButton 
          bg="#E2E8F0" 
          boxSize={35}
          borderRadius={50} 
          p={{ base: 4, md: 7 }} 
          _hover={{ bg: "#EBF8FF", color: "#3182CE" }} 
          icon={<SettingsIcon />} 
          variant="ghost" 
          size="sm" 
          aria-label="Settings" 
        />
        <Menu>
          <MenuButton 
            as={Button} 
            size="sm" 
            variant="ghost" 
            rightIcon={<ChevronDownIcon />}
            px={{ base: 1, md: 2 }}
          >
            <HStack>
              <Avatar 
                size={{ base: "sm", md: "md" }}
                borderRadius="35"
                w={35}
                name="Alex Morgan" 
                src={pic} 
                mr={{ base: 0, md: 2 }}
              />
              <Text display={{ base: "none", md: "block" }}>Alex</Text>
            </HStack>
          </MenuButton>
          <MenuList 
            zIndex={4} 
            borderRadius={25}  
            bg="#ffff" 
            p={{ base: 2, md: 4 }}
            minW={{ base: "150px", md: "200px" }}
          >
            <MenuItem _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Profile</MenuItem>
            <MenuItem _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Account Settings</MenuItem>
            <MenuItem _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Billing</MenuItem>
            <MenuItem _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Help Center</MenuItem>
            <MenuItem _hover={{ bg: "#EBF8FF", color: "#3182CE" }}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;