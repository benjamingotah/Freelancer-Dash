import React from 'react';
import ProjectCard from "../components/cards/ProjectCard.jsx";
import { VStack, Box, SimpleGrid, Stat, Text, StatLabel, StatNumber, Flex, Icon, Grid, GridItem } from '@chakra-ui/react';
import { FaCheckCircle, FaSpinner, FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const Projects = () => {
    const projectIds = [1,2,3,4,5];
    const MotionBox = motion(Box);
    
    // Stats data
    const stats = [
        { 
            label: "Total Projects", 
            value: "45", 
            icon: FaClipboardList,
            bgColor: "#F0F9FF",
            textColor: "#0369A1",
            iconColor: "#0EA5E9"
        },
        { 
            label: "Completed", 
            value: "40", 
            icon: FaCheckCircle,
            bgColor: "#F0FDF4",
            textColor: "#166534",
            iconColor: "#22C55E"
        },
        { 
            label: "In Progress", 
            value: "5", 
            icon: FaSpinner,
            bgColor: "#FFF7ED",
            textColor: "#9A3412",
            iconColor: "#F97316"
        }
    ];

    // Pie chart data
    const pieData = [
        { name: 'Completed', value: 40, color: '#38A169' },
        { name: 'In Progress', value: 3, color: '#3182CE' },
        { name: 'Pending', value: 2, color: '#DD6B20' }
    ];

    // Custom tooltip for pie chart
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <Box bg="white" p={3} borderRadius="md" boxShadow="md" border="1px solid #E2E8F0">
                    <Text fontWeight="bold">{payload[0].name}</Text>
                    <Text>{payload[0].value} projects</Text>
                </Box>
            );
        }
        return null;
    };

    return (
        <MotionBox 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            p={4}
        >
            <Box textAlign="center" mb={8}>
                <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                    Projects Summary
                </Text>
                <Text fontSize="md" color="gray.500" mt={2}>
                    Overview of all projects and their status
                </Text>
            </Box>

            {/* Stats Cards */}
            <SimpleGrid
                columns={{ base: 1, md: 3 }} 
                spacing={10} 
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
                mb={8}
            >
                {stats.map((stat, index) => (
                    <MotionBox
                        key={index}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Flex
                       
                            p={5}
                            fle
                            bg={stat.bgColor}
                            h={"10rem"}
                            width={
                                "15rem"
                            }
                            borderRadius="12px"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
                            align="center"
                        >
                            <Flex
                            p={15}
                                mr={4}
                                w={12}
                                h={12}
                                bg="white"
                                borderRadius="30"
                                align="center"
                                justify="center"
                    
                                boxShadow="inner"
                            >
                                <Icon 
                                    as={stat.icon}
                                    boxSize={20} 
                                    
                                    ml={20}
                                    mr={20}
                                    color={stat.iconColor}
                                />
                            </Flex>
                            <Stat>
                                <StatLabel 
                                    fontSize="sm" 
                                    fontWeight="500"
                                    color={stat.textColor}
                                    mb={1}
                                >
                                    {stat.label}
                                </StatLabel>
                                <StatNumber 
                                    fontSize="xl" 
                                    fontWeight="700"
                                    color={stat.textColor}
                                >
                                    {stat.value}
                                </StatNumber>
                            </Stat>
                        </Flex>
                    </MotionBox>
                ))}
            </SimpleGrid>

            {/* Main Content - Chart and Projects */}
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={8}
                alignItems="flex-start"
            >
                {/* Pie Chart Section */}
                <GridItem>
                    <MotionBox
                        bg="white"
                        p={6}
                        mt={20}
                        borderRadius="17"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon 
                                as={LucideIcons.PieChart}
                                color="#4A5568"
                                boxSize={15}
                                mr={2}
                            />
                            <Text fontSize="xl" fontWeight="bold" color="gray.700">
                                Project Distribution
                            </Text>
                        </Flex>
                        
                        <Box height={['300px', '400px']} width="100%">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        animationDuration={1000}
                                        animationBegin={200}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend 
                                        layout="horizontal"
                                        verticalAlign="bottom"
                                        align="center"
                                        wrapperStyle={{ paddingTop: '20px' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                    </MotionBox>
                </GridItem>

                {/* Projects List Section */}
                <GridItem>
                    <MotionBox
                        // bg="white"
                        p={6}
                        mt={20}
                        borderRadius="lg"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.05)"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Flex align="center" mb={4}>
                            <Icon 
                                as={LucideIcons.List}
                                color="#4A5568"
                                boxSize={6}
                                mr={2}
                            />
                            <Text fontSize="xl" fontWeight="bold" color="gray.700">
                                Recent Projects
                            </Text>
                        </Flex>
                        
                        <VStack spacing={4}>
                            {projectIds.map(id => (
                                <ProjectCard key={id} projectId={id} />
                            ))}
                        </VStack>
                    </MotionBox>
                </GridItem>
            </Grid>
        </MotionBox>
    );
};

export default Projects;