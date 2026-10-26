import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import MonumentsAndMemorials from './pages/monuments-and-memorials/MonumentsAndMemorials';
import CapitolTours from './pages/capitol-tours/CapitolTours';
import WhiteHouseTours from './pages/white-house-tours/WhiteHouseTours';
import Smithsonian from './pages/smithsonian/Smithsonian';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monuments-and-memorials" element={<MonumentsAndMemorials />} />
          <Route path="capitol-tours" element={<CapitolTours />} />
          <Route path="white-house-tours" element={<WhiteHouseTours />} />
          <Route path="smithsonian" element={<Smithsonian />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
