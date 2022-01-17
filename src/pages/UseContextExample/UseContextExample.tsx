import { useState } from 'react';

import { SearchWidget } from './components';
import { SearchContext } from './context';
import data from './data.json';

export const UseContextExample = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useContext</h1>

      <SearchContext.Provider value={{ input, setInput, results, setResults, data }}>
        <SearchWidget />
      </SearchContext.Provider>
    </div>
  );
};
