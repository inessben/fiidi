import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LApplication from './pages/LApplication/LApplication';
import LeFestival from './pages/LeFestival/LeFestival';
import LeBlog from './pages/LeBlog/LeBlog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<LApplication />} />
            <Route path="/festival" element={<LeFestival />} />
            <Route path="/blog" element={<LeBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
