import { Box, Flex, Text, Badge, HStack, Tag, Divider, Progress, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const ProjectCard = ({ projectId }) => {
  // All project data defined inside the component
  const sampleProjects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "Fashion Forward",
      status: "Completed",
      description: "Complete redesign of online store with improved UX and mobile responsiveness. Increased conversion rates by 35%.",
      technologies: ["React", "Next.js", "Chakra UI", "Stripe"],
      amount: "12,500",
      statusColor: "#38A169", // Green
      startDate: "2023-01-15",
      endDate: "2023-04-20",
      progress: 100,
      icon: "ShoppingBag"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      client: "MediCare Solutions",
      status: "In Progress",
      description: "Interactive dashboard for patient analytics with real-time data visualization and reporting features.",
      technologies: ["TypeScript", "D3.js", "Firebase", "Tailwind"],
      amount: "18,200",
      statusColor: "#3182CE", // Blue
      startDate: "2023-05-10",
      endDate: "2023-09-30",
      progress: 65,
      icon: "Activity"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      client: "FinTech Global",
      status: "Pending",
      description: "Cross-platform mobile banking application with biometric authentication and budgeting tools.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      amount: "24,000",
      statusColor: "#DD6B20", // Orange
      startDate: "2023-08-01",
      endDate: "2023-11-15",
      progress: 15,
      icon: "Smartphone"
    },
    {
      id: 4,
      title: "Corporate Website",
      client: "TechSolutions Inc.",
      status: "Completed",
      description: "Modern corporate website with CMS integration and multilingual support.",
      technologies: ["WordPress", "PHP", "JavaScript"],
      amount: "9,800",
      statusColor: "#38A169", // Green
      startDate: "2023-02-01",
      endDate: "2023-03-15",
      progress: 100,
      icon: "Globe"
    },
    {
      id: 5,
      title: "Inventory System",
      client: "RetailPlus",
      status: "In Progress",
      description: "Custom inventory management system with barcode scanning functionality.",
      technologies: ["Python", "Django", "PostgreSQL"],
      amount: "15,750",
      statusColor: "#3182CE", // Blue
      startDate: "2023-06-20",
      endDate: "2023-10-10",
      progress: 42,
      icon: "Package"
    }
  ];

  // Find the project by ID or use the first one as default
  const project = sampleProjects.find(p => p.id === projectId) || sampleProjects[0];
  const MotionBox = motion(Box);
  
  // Get the Lucide icon component
  const IconComponent = LucideIcons[project.icon] || LucideIcons["Folder"];

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Circular progress component
  const CircularProgress = ({ progress }) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <Box position="relative" width="44px" height="44px">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="4"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke={project.statusColor}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 22 22)"
          />
        </svg>
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="12px"
          fontWeight="600"
          color="#4A5568"
        >
          {progress}%
        </Text>
      </Box>
    );
  };

  return (
    <MotionBox
      bg="#FFFFFF"
      borderRadius="12px"
      m={4}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
      overflow="hidden"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" 
      }}
      transition={{ duration: 0.2 }}
      width="100%"
      p="20px"
    >
      <Grid templateColumns="44px 1fr" gap={4} mb={4}>
        <GridItem>
          <Box
            bg={`${project.statusColor}20`} // 20% opacity of status color
            borderRadius="12px"
            width="44px"
            height="44px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IconComponent color={project.statusColor} size={20} />
          </Box>
        </GridItem>
        <GridItem>
          <Flex justify="space-between" align="center">
            <Text 
              fontWeight="600" 
              fontSize="18px" 
              color="#1A202C"
              noOfLines={1}
            >
              {project.title}
            </Text>
            <Badge 
              bg={project.statusColor}
              color="#FFFFFF"
              borderRadius="12px"
              px="12px"
              py="4px"
              fontSize="12px"
            >
              {project.status}
            </Badge>
          </Flex>
          <Text color="#718096" fontSize="14px" mt={1}>
            Client: <Text as="span" fontWeight="500" color="#4A5568">{project.client}</Text>
          </Text>
        </GridItem>
      </Grid>
      
      <Text color="#718096" fontSize="14px" mb="16px" noOfLines={3}>
        {project.description}
      </Text>
      
      <Divider mb="16px" borderColor="#E2E8F0" />
      
      <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
        <GridItem>
          <Text fontSize="12px" color="#A0AEC0" mb="4px">Start Date</Text>
          <Flex align="center">
            <LucideIcons.Calendar size={14} color="#718096" style={{ marginRight: '6px' }} />
            <Text fontSize="14px" color="#4A5568" fontWeight="500">
              {formatDate(project.startDate)}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" color="#A0AEC0" mb="4px">End Date</Text>
          <Flex align="center">
            <LucideIcons.CalendarCheck size={14} color="#718096" style={{ marginRight: '6px' }} />
            <Text fontSize="14px" color="#4A5568" fontWeight="500">
              {formatDate(project.endDate)}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" color="#A0AEC0" mb="4px">Progress</Text>
          <CircularProgress progress={project.progress} />
        </GridItem>
      </Grid>
      
      <Divider mb="16px" borderColor="#E2E8F0" />
      
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="12px" color="#A0AEC0" mb="4px">Project Value</Text>
          <Flex align="center">
            <LucideIcons.DollarSign size={16} color="#718096" style={{ marginRight: '6px' }} />
            <Text fontWeight="700" color="#2D3748" fontSize="18px">
              {project.amount}
            </Text>
          </Flex>
        </Box>
        
        <HStack spacing="8px">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Tag 
              key={index}
              size="sm"
              bg="#EDF2F7"
              color="#4A5568"
              borderRadius="6px"
              fontSize="12px"
              px="8px"
              py="4px"
            >
              {tech}
            </Tag>
          ))}
          {project.technologies.length > 3 && (
            <Tag 
              size="sm"
              bg="#EDF2F7"
              color="#4A5568"
              borderRadius="6px"
              fontSize="12px"
            >
              +{project.technologies.length - 3}
            </Tag>
          )}
        </HStack>
      </Flex>
    </MotionBox>
  );
};

export default ProjectCard;