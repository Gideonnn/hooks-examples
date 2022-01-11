import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, UseEffectExample, UseRefExample, UseStateExample } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="use-state" element={<UseStateExample />} />
        <Route path="use-effect" element={<UseEffectExample />} />
        <Route path="use-ref" element={<UseRefExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
