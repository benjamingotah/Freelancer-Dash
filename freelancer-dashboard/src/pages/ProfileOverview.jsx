import {
  Box,
  Flex,
  Text,
  Avatar,
  Badge,
  Tag,
  Grid,
  HStack,
  Icon,
  Button,
  Container,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { 
  FaUserPlus, 
  FaComment,
  FaMapMarkerAlt,
  FaDollarSign,
  FaBriefcase
} from 'react-icons/fa';
import { 
  ClipboardCheck,
  Smile,
  Clock as ClockIcon,
} from 'lucide-react';
import StatCard from '../components/cards/StatCard.jsx';
import Contact from '../components/cards/Contact.jsx';
import ProjectCard from '../components/cards/ProjectCard.jsx';
import FeedbackCards from '../components/cards/FeedbackCard.jsx';

const ProfileOverview = () => {
  const projectIds = [1, 2, 3];

  const profileData = {
    name: 'Benjamin Gotah',
    title: 'Senior UI/UX Designer & Frontend Developer',
    avatar: 'http://localhost:5173/src/assets/pic.jpg',
    location: 'San Francisco, CA, USA',
    availabilityStatus: 'Available for work',
    hourlyRate: '$95/hr',
    experience: '7+ years',
    skills: [
      'UI/UX Design',
      'React.js',
      'Next.js',
      'Figma',
      'TypeScript',
      'Responsive Design',
      'User Research',
      'Prototyping',
    ],
    contactInfo: {
      email: 'alex.morgan@example.com',
      phone: '+1 (415) 555-0192',
      website: 'alexmorgan.design',
      linkedin: 'linkedin.com/in/alexmorgan',
      github: 'github.com/alexmorgan',
    },
    bio: 'Creative UI/UX designer with 7+ years of experience crafting beautiful digital experiences. Specialized in creating intuitive user interfaces and seamless user experiences for web and mobile applications.',
    stats: [
      { label: 'Projects Completed', value: '142' },
      { label: 'Happy Clients', value: '98%' },
      { label: 'On Time Delivery', value: '95%' },
    ],
  };

  return (
    <Container maxW="full" py={10}>
      {/* Page Header */}
      <Box display="flex"  justifyContent="center" mb={10}>
        <Text fontSize="32" fontWeight="bold">My Dashbord</Text>
      </Box>

      {/* Main Content Area - Profile, About, Skills */}
      <Flex
      flexWrap={"wrap"}
        direction={{ base: "column", md: "row" }}
        gap={20}
        mb={40}
        align="stretch"
      >
        {/* Profile Banner (Left Side) */}
        <Box 
          flex={{ base: "1", md: "0.4" }}
          bg="white"
          borderRadius="15"
          w={"45%"}
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.05)"
          overflow="hidden"
          minW={{ md: "400px" }}
        >
          <Box bg="#000" h="70px" />
          <Box position="relative" p={15} pt={16}>
            <Avatar
              size="2xl"
              w={100}
              borderRadius={100}
              name={profileData.name}
              src={profileData.avatar}
              position="absolute"
              top="-50px"
              left="10px"
              border="4px solid white"
              boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
            />

            <VStack align="flex-start" spacing={4} mt={40}>
              <Flex align="center" gap={3}>
                <Text fontSize="2xl" fontWeight="bold" color="#1A202C">
                  {profileData.name}
                </Text>
                <Badge
                  bg="#DCFCE7"
                  color="#166534"
                  px={3}
                  py={1}
                  borderRadius="25"
                  fontSize="sm"
                >
                  {profileData.availabilityStatus}
                </Badge>
              </Flex>
              
              <Text color="#4A5568">{profileData.title}</Text>
              
              <HStack spacing={7} divider={<Box h="4" borderLeftWidth="1px" borderColor="#E2E8F0" />}>
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} boxSize={15} mr={1} color="#4A5568" />
                  <Text fontSize="sm">{profileData.location}</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaDollarSign} boxSize={15} mr={1} color="#4A5568" />
                  <Text fontSize="sm">{profileData.hourlyRate}</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaBriefcase} boxSize={15} mr={1} color="#4A5568" />
                  <Text fontSize="sm">{profileData.experience}</Text>
                </Flex>
              </HStack>

              <HStack spacing={4} mt={4}>
                <Button
                  leftIcon={<Icon as={FaUserPlus} />}
                  bg="#000"
                  color="white"
                  borderRadius="25"
                  _hover={{ bg: "#2563EB" }}
                  px={6}
                >
                  Connect
                </Button>
                <Button
                  leftIcon={<Icon as={FaComment} />}
                  variant="outline"
                  borderRadius="25"
                  _hover={{ bg: "#EBF8FF", color: "#3182CE" }}
                  px={6}
                >
                  Message
                </Button>
              </HStack>

              <Divider borderColor="#E2E8F0" my={4} />

              <VStack spacing={3} align="stretch" w="full">
                {profileData.stats.map((stat, index) => (
                  <Flex key={index} align="center" justify="space-between" p={2} _hover={{ bg: "#F7FAFC" }} borderRadius="md">
                    <HStack spacing={3}>
                      {index === 0 && <Icon as={ClipboardCheck} boxSize={15} color="#3182CE" />}
                      {index === 1 && <Icon as={Smile} boxSize={15} color="#38A169" />}
                      {index === 2 && <Icon as={ClockIcon} boxSize={15} color="#DD6B20" />}
                      <Text fontSize="sm" color="#4A5568">{stat.label}</Text>
                    </HStack>
                    <Badge 
                      colorScheme={
                        index === 0 ? "blue" : 
                        index === 1 ? "green" : "orange"
                      }
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {stat.value}
                    </Badge>
                  </Flex>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Box>

        {/* About and Skills (Right Side) */}
        <Flex 
          flex={{ base: "1", md: "0.6" }}
          direction="column"
          gap={6}
          w={"50%"}
          maxW={{ md: "500px" }}
        >
          {/* About Section */}
          <Box
            flex={1}
            bg="white"
            p={15}
            mb={10}
            borderRadius="17"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.05)"
            h="fit-content"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              About
            </Text>
            <Text color="#4A5568" lineHeight="taller">
              {profileData.bio}
            </Text>
          </Box>

          {/* Skills Section */}
          <Box
            flex={1}
            bg="white"
            p={15}
            borderRadius="17"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.05)"
            h="fit-content"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Skills
            </Text>
            <Flex flexWrap="wrap" gap={3}>
              {profileData.skills.map((skill, index) => (
                <Tag
                  key={index}
                  bg="#F3F4F6"
                  color="#1E40AF"
                  borderRadius="30"
                  px={4}
                  py={2}
                  fontSize="sm"
                >
                  {skill}
                </Tag>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>

      {/* Contact + Earnings */}
      <Flex direction={{ base: "column", md: "row" }} gap={6} mb={10} flexWrap={"wrap"}>
        <Box flex={1} mr={10}>
          <Contact />
        </Box>
        <Box flex={1}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>
            Earning Summary
          </Text>
          <StatCard />
        </Box>
      </Flex>

      {/* Projects and Feedbacks - Side by Side */}
      <Flex mt={40} direction={{ base: "column", md: "row" }} flexWrap={"wrap"} gap={6} mb={20}>
        {/* Projects Section */}
        <Box flex={1}>
          <Text fontWeight="bold" fontSize="lg" mb={6}>
            Recent Projects
          </Text>
          <VStack spacing={6}>
            {projectIds.map((id) => (
              <ProjectCard
                key={id}
                projectId={id}
                cardProps={{
                  p: { base: 3, md: 4 },
                  fontSize: { base: "sm", md: "md" },
                  spacing: { base: 3, md: 4 },
                }}
              />
            ))}
          </VStack>
        </Box>

        {/* Feedbacks Section */}
        <Box flex={1}>
          <Text fontWeight="bold" fontSize="lg" mb={6}>
            Feedbacks
          </Text>
          <FeedbackCards />
        </Box>
      </Flex>
    </Container>
  );
};

export default ProfileOverview;