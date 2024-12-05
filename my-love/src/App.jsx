import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Products from './Products.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main> {/* Wrap main content in <main> tag */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* 404 route */}

        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;