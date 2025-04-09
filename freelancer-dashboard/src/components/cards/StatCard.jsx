
import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StatCard = ({ title, value, icon, colorScheme = "blue" }) => {
  // Sample earnings data - replace with your actual data
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Earnings',
        data: [5000, 7000, 6500, 8000, 9000, 8500, 9500, 10000, 11000, 10500, 12000, 13000],
        borderColor: '#3182CE', // blue.500
        backgroundColor: 'rgba(49, 130, 206, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#3182CE',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3182CE',
        pointHoverBorderColor: '#fff',
        pointHitRadius: 10,
        pointBorderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      }
    }
  };

  return (
    <Box 
      bg="white" 
      borderRadius="40" 
      boxShadow="sm" 
      h="full"
      w="full"
      mr={20}
      p={4}
      as={motion.div}
      whileHover={{ y: -5, boxShadow: "0 12px 20px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Flex alignItems="center">
          {icon && <Icon as={icon} fontSize="2xl" color={`${colorScheme}.500`} mr={2} />}
          <Text fontSize="xl" fontWeight="semibold">{title}</Text>
        </Flex>
        {value && (
          <Text fontSize="2xl" fontWeight="bold" color={`#3182ce`}>
            ${value.toLocaleString()}
          </Text>
        )}
      </Flex>
      
      <Box height="400px" mt={4}>
        <Line data={earningsData} options={options} />
      </Box>
      
      <Text mt={2} fontSize="sm" color="#A0AEC0" textAlign="center">
        Monthly earnings overview for the year
      </Text>
    </Box>
  );
};

export default StatCard;