import { useContext } from 'react';

import { SearchContext } from '../../context';

export const SearchInput = () => {
  const { input, setInput } = useContext(SearchContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={event => setInput(event.target.value)}
        className="border"
      />
    </div>
  );
};
export const SearchResults = () => {
  const { input, data } = useContext(SearchContext);

  let results = data;

  if (input) {
    results = data.filter(
      coin =>
        coin.name.toLowerCase().includes(input.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(input.toLowerCase()),
    );
  }

  return (
    <div>
      <ul>
        {results.map(coin => (
          <li key={coin.symbol}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const SearchWidget = () => (
  <div>
    <SearchInput />
    <SearchResults />
  </div>
);
