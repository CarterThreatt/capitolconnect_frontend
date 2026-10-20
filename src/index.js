import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout';
import Home from './components/pages/Home/Home';
import MonumentsAndMemorials from './components/pages/Monuments and Memorials/Monuments and Memorials';
import CapitolTours from './components/pages/Capitol Tours/Capitol Tours';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monuments-and-memorials" element={<MonumentsAndMemorials />} />
          <Route path="capitol-tours" element={<CapitolTours />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);