import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, UseStateExample } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="use-state" element={<UseStateExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
