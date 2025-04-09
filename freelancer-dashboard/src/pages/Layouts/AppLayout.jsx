import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  IconButton
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar.jsx';
import Header from '../../components/Header.jsx';
import ProfileOverview from '../ProfileOverview.jsx';
import Feedbacks from '../Feedbacks.jsx';
import Earnings from '../Earnings.jsx';
import Projects from '../Projects.jsx';

export const AppLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeNav, setActiveNav] = useState('Profile Overview');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch(activeNav) {
      case 'Profile Overview':
        return <ProfileOverview />;
      case 'Projects':
        return <Projects />;
      case 'Clients Feedback':
        return <Feedbacks />;
      case 'Earnings':
        return <Earnings />;
      default:
        return <ProfileOverview />;
    }
  };

  return (
    <Flex h="100vh" overflow="hidden" bg="#f7fafc" position="relative">
      {/* Desktop Sidebar - Fixed position */}
      {isDesktop && (
        <Box
          w="250px"
          flexShrink={0}
          h="100vh"
          position="fixed"
          left={0}
          top={0}
          zIndex={1}
        >
          <Sidebar activeNav={activeNav} setActiveNav={setActiveNav}/>
        </Box>
      )}

      {/* Mobile Drawer */}
      {!isDesktop && (
        <>
          <Drawer 
            isOpen={isOpen} 
            placement="left" 
            onClose={onClose}
            size="full"
          >
            <DrawerOverlay>
              <DrawerContent maxW="250px">
                <DrawerCloseButton />
                <DrawerBody p={0}>
                  <Sidebar
                    activeNav={activeNav} 
                    setActiveNav={(nav) => {
                      setActiveNav(nav);
                      onClose();
                    }} 
                  />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          {/* Mobile Hamburger Button */}
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            onClick={onOpen}
            position="fixed"
            top="20px"
            left="20px"
            bg={"white"}
            zIndex="dropdown"
            color={"blue"}
            size="md"
            display={{ base: 'block', md: 'none' }}
          />
        </>
      )}

      {/* Main Content Area */}
      <Box 
        flex="1"
        overflow="auto"
        pl={isDesktop ? '250px' : 0}
        w="full"
        minH="100vh"
      >
        <Header />
        <Box p={8} ml={15}>
          {renderContent()}
        </Box>
      </Box>
    </Flex>
  );
};

export default AppLayout;