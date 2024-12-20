import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DealsPage } from './pages/DealsPage';
import { DealPage } from './pages/DealPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DealsPage />} />
        <Route path="/deal/:id" element={<DealPage />} />
      </Routes>
    </BrowserRouter>
  );
}