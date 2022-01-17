import React from 'react';

import { Coin } from './types';

export interface SearchContext {
  input: string;
  setInput: (value: string) => void;
  results: string[];
  setResults: (value: string[]) => void;
  data: Coin[];
}

export const SearchContext = React.createContext<SearchContext>({} as SearchContext);
