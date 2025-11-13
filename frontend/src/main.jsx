import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Uni1 from './pages/Uni1.jsx';
import Uni2 from './pages/Uni2.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Navigate to="/uni1" replace/>}/>
          <Route path="uni1" element={<Uni1/>}/>
          <Route path="uni2" element={<Uni2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
