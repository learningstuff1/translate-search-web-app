import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query, inputLanguage, outputLanguage) => {
    try {
      const response = await axios.post('http://localhost:5000/search', { query, inputLanguage, outputLanguage });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div className="App">
      <h1>Translator Video Search</h1>
      <h5>A quick, free way to search for your favorite foreign media.</h5>
      <SearchBar onSearch={handleSearch} />
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`} target="_blank" rel="noopener noreferrer">
              {result.snippet.title}
            </a>
            <p>{result.snippet.description}</p>
            <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
