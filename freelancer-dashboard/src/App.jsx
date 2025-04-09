import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/Layouts/AppLayout.jsx';
import ProfileOverview from './pages/ProfileOverview.jsx';
import Earnings from './pages/Earnings.jsx';
import Feedbacks from "./pages/Feedbacks.jsx"
import FeedbackCard from './components/cards/FeedbackCard.jsx';
import Projects from './pages/Projects.jsx';

// You'll need to define or import your theme
const theme = {}; // Add your theme configuration here

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<ProfileOverview />} />
            <Route path='/earning' element={<Earnings />} />
            <Route path='/clients-feedback' element={< Feedbacks/>} />
            <Route path='/projects' element={< Projects/>} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;