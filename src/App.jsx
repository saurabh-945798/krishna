import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import CTA from './Components/CTA/CTA';
import Blog from './Components/Blog/Blog';
import Process from './Components/Process/Process';
import Hero from './Components/Hero/Hero';
import Gallery from './Components/Gallery/Gallery';
import Slider from './Components/Slider/Slider';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';  // Import Form component


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route for the homepage content */}
        <Route 
          path="/" 
          element={
            <div>
              <Slider />
              <Hero />
              <CTA />
              <Gallery />
              <Blog />
              <Process />
              <Contact />
              <Footer />
            </div>
          } 
        />

        {/* Form route for separate page */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
