import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Cursos from './pages/cursos';
import Conclusao from './pages/conclusao';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/conclusao" element={<Conclusao />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
