import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topicId" element={<TopicDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
