import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LogementWrapper from './wrappers/Logement/wrapper.js';
import NotFound from './pages/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <div id="container" >
          <main>
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="about" Component={About} />
              <Route path="logement/:id" element={<LogementWrapper />} />
              <Route path="*" Component={NotFound}/>
            </Routes>
          </main>           
          <Footer /> 
        </div>
    </Router>
  </React.StrictMode>
);

