import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Brochure from './pages/Brochure';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component

function App() {
  return (
    <Router> 
    
        <Navbar />
          
          <Route path="/brochure" element={<Brochure />} />
        </Routes>
      
    </Router>
  );
}

export default App;
