import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, UseEffectExample, UseStateExample } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="use-state" element={<UseStateExample />} />
        <Route path="use-effect" element={<UseEffectExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
