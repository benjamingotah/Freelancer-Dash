import React from 'react';
import { 
  Box, 
  Flex, 
  Grid, 
  GridItem, 
  Heading, 
  Text, 
  Icon,
  Badge,
  VStack,
  HStack,
  Divider
} from "@chakra-ui/react";
import { 
  FiTrendingUp, 
  FiCreditCard,
  FiRepeat
} from "react-icons/fi";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import StatCard from '../components/cards/StatCard';

export const Earnings = () => {
  // Transaction data with chart values
  const transactions = [
    { id: 1, date: "Apr 5", amount: 245.80, type: "Income", description: "Client Payment", chartValue: 245 },
    { id: 2, date: "Apr 3", amount: 89.99, type: "Expense", description: "Software Subscription", chartValue: 89 },
    { id: 3, date: "Apr 1", amount: 320.50, type: "Income", description: "Project Completion", chartValue: 320 },
    { id: 4, date: "Mar 28", amount: 45.00, type: "Expense", description: "Service Fee", chartValue: 45 }
  ];

  // Income vs Expenses data
  const incomeExpenseData = [
    { name: 'Income', value: 3420, color: '#38A169' },
    { name: 'Expenses', value: 970, color: '#E53E3E' }
  ];

  // Custom tooltip for pie chart
  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box bg="#FFFFFF" p="12px" borderRadius="8px" boxShadow="0px 2px 8px rgba(0,0,0,0.1)">
          <Text fontWeight="600">{payload[0].name}</Text>
          <Text>${payload[0].value.toLocaleString()}</Text>
        </Box>
      );
    }
    return null;
  };

  // Custom tooltip for bar chart
  const BarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <Box bg="#FFFFFF" p="12px" borderRadius="8px" boxShadow="0px 2px 8px rgba(0,0,0,0.1)">
          <Text fontWeight="600">{data.description}</Text>
          <Text color={data.type === "Income" ? '#38A169' : '#E53E3E'}>
            {data.type === "Income" ? "+" : "-"}${data.amount.toFixed(2)}
          </Text>
          <Text fontSize="sm">{data.date}</Text>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box p="24px">
      <Heading size="lg" color="#3182CE" mb="24px">Earnings Dashboard</Heading>
      
      {/* Main Content Grid */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="24px" mb={20}>
        
        {/* Income vs Expenses Pie Chart */}
        <GridItem>
          <Box bg="#FFFFFF" display={"flex"} flexWrap={"wrap"}
          borderRadius="16px" p="24px" boxShadow="0px 2px 8px rgba(0,0,0,0.05)">
            <Flex align="center" mb="20px">
              <Icon as={FiTrendingUp} color="#3182CE" boxSize="20px" mr="8px" />
              <Text fontWeight="600" fontSize="18px">Income vs Expenses</Text>
            </Flex>
            
            <Flex direction={{ base: "column", md: "row" }} align="center">
              <Box width="100%" height="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={incomeExpenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {incomeExpenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<PieTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              
              <VStack spacing="16px" align="flex-start" ml={{ md: "24px" }} mt={{ base: "16px", md: "0" }}>
                {incomeExpenseData.map((item, index) => (
                  <Flex key={index} align="center" justify="space-between" width="100%">
                    <Flex align="center">
                      <Box w="12px" h="12px" bg={item.color} borderRadius="50%" mr="8px" />
                      <Text>{item.name}</Text>
                    </Flex>
                    <Text fontWeight="600">${item.value.toLocaleString()}</Text>
                  </Flex>
                ))}
                <Divider my="8px" />
                <Flex justify="space-between" width="100%">
                  <Text fontWeight="600">Net Income</Text>
                  <Text fontWeight="600" color="#38A169">
                    ${(incomeExpenseData[0].value - incomeExpenseData[1].value).toLocaleString()}
                  </Text>
                </Flex>
              </VStack>
            </Flex>
          </Box>
        </GridItem>
        
        {/* Recent Transactions with Bar Chart */}
        <GridItem>
          <Box bg="#FFFFFF" borderRadius="16px" p="24px" boxShadow="0px 2px 8px rgba(0,0,0,0.05)">
            <Flex align="center" mb="20px">
              <Icon as={FiCreditCard} color="#3182CE" boxSize="20px" mr="8px" />
              <Text fontWeight="600" fontSize="18px">Recent Transactions</Text>
            </Flex>
            
            <Flex direction={{ base: "column", md: "row" }}>
              <Box width="100%" height="250px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactions}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<BarTooltip />} />
                    <Bar 
                      dataKey="chartValue" 
                      fill="#3182CE"
                      radius={[4, 4, 0, 0]}
                    >
                      {transactions.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.type === "Income" ? '#38A169' : '#E53E3E'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
              
              <VStack spacing="12px" align="flex-start" ml={{ md: "24px" }} mt={{ base: "16px", md: "0" }}>
                {transactions.map((transaction) => (
                  <Flex 
                    key={transaction.id} 
                    align="center" 
                    justify="space-between" 
                    flexWrap={"wrap"}
                    width="100%"
                    p="12px"
                    borderRadius="8px"
                    bg="#F8F9FA"
                  >
                    <Box>
                      <Text fontWeight="500">{transaction.description}</Text>
                      <Text fontSize="14px" color="#718096">{transaction.date}</Text>
                    </Box>
                    <Box textAlign="right">
                      <Text 
                        fontWeight="600" 
                        color={transaction.type === "Income" ? '#38A169' : '#E53E3E'}
                      >
                        {transaction.type === "Income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </Text>
                      <Badge 
                        bg={transaction.type === "Income" ? '#E6FFFA' : '#FFF5F5'} 
                        color={transaction.type === "Income" ? '#38A169' : '#E53E3E'}
                        fontSize="12px"
                        px="8px"
                        py="2px"
                        borderRadius="6px"
                      >
                        {transaction.type}
                      </Badge>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Flex>
            
            <Flex justify="center" mt="16px">
              <Text 
                fontSize="14px" 
                color="#3182CE"
                fontWeight="500" 
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={FiRepeat} mr="4px" />
                View All Transactions
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <StatCard/>
    </Box>
  );
};

export default Earnings;