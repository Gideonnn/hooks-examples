import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Home,
  UseCallbackExample,
  UseContextExample,
  UseEffectExample,
  UseLayoutEffectExample,
  UseMemoExample,
  UseReducerExample,
  UseRefExample,
  UseStateExample,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="use-state" element={<UseStateExample />} />
        <Route path="use-effect" element={<UseEffectExample />} />
        <Route path="use-ref" element={<UseRefExample />} />
        <Route path="use-memo" element={<UseMemoExample />} />
        <Route path="use-layout-effect" element={<UseLayoutEffectExample />} />
        <Route path="use-callback" element={<UseCallbackExample />} />
        <Route path="use-reducer" element={<UseReducerExample />} />
        <Route path="use-context" element={<UseContextExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
