import React, { useState } from 'react';
import { supportedLanguages } from './supportedLanguages';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('es');

  const handleSearch = () => {
    onSearch(query, inputLanguage, outputLanguage);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <label>
        Input Language:
        <select value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
          {supportedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Output Language:
        <select value={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value)}>
          {supportedLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;