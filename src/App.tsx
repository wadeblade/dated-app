
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default App;

