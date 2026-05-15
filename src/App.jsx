import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fahrzeuge" element={<Inventory />} />
        {/* We can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
