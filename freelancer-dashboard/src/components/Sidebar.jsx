import React from 'react';
import pic from '../assets/pic.jpg'
import { 
  Box, 
  Flex, 
  Text, 
  Avatar, 
  VStack, 
  flexbox,
  Center
} from '@chakra-ui/react';
import { 
  FaHome, 
  FaBriefcase, 
  FaUser, 
  FaChartBar, 
  FaEnvelope 
} from 'react-icons/fa';
import { wrap } from 'framer-motion';

export const Sidebar = ({ activeNav, setActiveNav, isMobile = false }) => {
  const menuItems = [
    { 
      name: 'Profile Overview', 
      icon: FaHome
    },
    { 
      name: 'Projects', 
      icon: FaBriefcase
    },
    { 
      name: 'Clients Feedback', 
      icon: FaUser
    },
    { 
      name: 'Earnings', 
      icon: FaChartBar
    },
    
  ];

  return (
    <Box 
      bg="#ffff" 
      p={isMobile ? 4 : 6}
      h={isMobile ? "100%" : "100vh"}
      w={isMobile ? "250px" : "auto"}
    >
      {!isMobile && (
        <Box display={"flex"} flexWrap={"wrap"} fontSize="1.3em" fontWeight="500" mb={8} p={4}>
          <Text >Freelance Dashboard</Text>
        </Box>
      )}

      <Box mb={8} w={'full'}>
        <Flex align="center" flexDirection={'column'} p={5}>
        <Avatar 
            size="lg"
            borderRadius="100"
            w={120}
            name="Alex Morgan" 
            src={pic} 
            mr={5} 
          />
          <Box display="flex" flexDirection={'column'} >
            <Text fontWeight="medium" fontSize="sm">Benjamin Gotah</Text>
            <Text fontSize="xs" mb={40} color="rgba(0, 0, 0, 0.36)">Software Engineer</Text>
          </Box>
        </Flex>
      </Box>
      
      <VStack align="stretch" py={8} spacing={10}>
        {menuItems.map((item) => (
          <Box
            key={item.name}
            display="flex"
            ml={20}
            alignItems="center"
            p={3}
            borderRadius="md"
            bg={activeNav === item.name ? '#EBF8FF)' : 'transparent'}
            color="rgba(0, 0, 0, 0.36)"
            _hover={{
              bg: "#EBF8FF", color: "#3182CE",
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setActiveNav(item.name)}
          >
            <Box mr={3} color={activeNav === item.name ? '#3182CE' : 'inherit'}>
              <item.icon />
            </Box>
            <Text 
              fontWeight="medium" 
              color={activeNav === item.name ? '#3182CE' : 'inherit'}
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import pic from '../assets/pic.jpg';
// import { 
//   Box, 
//   Flex, 
//   Text, 
//   Avatar, 
//   VStack,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerBody,
//   useDisclosure
// } from '@chakra-ui/react';
// import { 
//   FaHome, 
//   FaBriefcase, 
//   FaUser, 
//   FaChartBar,
//   FaBars,
//   FaTimes
// } from 'react-icons/fa';

// export const Sidebar = ({ activeNav, setActiveNav }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Initial check
//     checkMobile();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', checkMobile);
    
//     // Cleanup
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const menuItems = [
//     { id: 1, name: 'Profile Overview', icon: FaHome },
//     { id: 2, name: 'Projects', icon: FaBriefcase },
//     { id: 3, name: 'Clients Feedback', icon: FaUser },
//     { id: 4, name: 'Earnings', icon: FaChartBar },
//   ];

//   const SidebarContent = ({ onItemClick = () => {} }) => (
//     <Box 
//       bg="#ffff" 
//       p={6}
//       h={isMobile ? "auto" : "100vh"}
//       w={isMobile ? "100%" : "250px"}
//     >
//       {!isMobile && (
//         <Box display="flex" flexWrap="wrap" fontSize="1.3em" fontWeight="500" mb={8} p={4}>
//           <Text>Freelance Dashboard</Text>
//         </Box>
//       )}

//       <Box mb={8} w='full'>
//         <Flex align="center" flexDirection='column' p={5}>
//           <Avatar 
//             size="lg"
//             borderRadius="100"
//             w={120}
//             name="Alex Morgan" 
//             src={pic} 
//             mr={5} 
//           />
//           <Box display="flex" flexDirection='column'>
//             <Text fontWeight="medium" fontSize="sm">Benjamin Gotah</Text>
//             <Text fontSize="xs" mb={40} color="rgba(0, 0, 0, 0.36)">Software Engineer</Text>
//           </Box>
//         </Flex>
//       </Box>
      
//       <VStack align="stretch" py={8} spacing={10}>
//         {menuItems.map((item) => (
//           <Box
//             key={item.id}
//             display="flex"
//             ml={20}
//             alignItems="center"
//             p={3}
//             borderRadius="md"
//             bg={activeNav === item.name ? '#EBF8FF' : 'transparent'}
//             color="rgba(0, 0, 0, 0.36)"
//             _hover={{
//               bg: "#EBF8FF", 
//               color: "#3182CE",
//               textDecoration: 'none',
//               cursor: 'pointer'
//             }}
//             onClick={() => {
//               setActiveNav(item.name);
//               onItemClick();
//             }}
//           >
//             <Box mr={3} color={activeNav === item.name ? '#3182CE' : 'inherit'}>
//               <item.icon />
//             </Box>
//             <Text 
//               fontWeight="medium" 
//               color={activeNav === item.name ? '#3182CE' : 'inherit'}
//             >
//               {item.name}
//             </Text>
//           </Box>
//         ))}
//       </VStack>
//     </Box>
//   );

//   return (
//     <>
//       {/* Mobile Hamburger Button - Shows only on mobile */}
//       {isMobile && (
//         <IconButton
//           icon={isOpen ? <FaTimes /> : <FaBars />}
//           onClick={isOpen ? onClose : onOpen}
//           position="fixed"
//           top="20px"
//           left="20px"
//           zIndex="modal"
//           aria-label="Toggle Sidebar"
//           colorScheme="blue"
//           size="lg"
          
//         />
//       )}

//       {/* Desktop Sidebar - Shows only on desktop */}
//       {!isMobile && (
//         <Box position="fixed" left={0} top={0} h="100vh">
//           <SidebarContent />
//         </Box>
//       )}

//       {/* Mobile Drawer - Shows only on mobile when opened */}
//       {isMobile && (
//         <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
//           <DrawerOverlay>
//             <DrawerContent>
//               <DrawerBody p={0}>
//                 <SidebarContent onItemClick={onClose} />
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>
//       )}
//     </>
//   );
// };

// export default Sidebar;
