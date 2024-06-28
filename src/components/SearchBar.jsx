import React, { useState } from "react";
import "./ViewDetails.css";
import { searchAPI } from "../apiManage/api";





function SearchBar() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  
  
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={async () => {
          const results = await searchAPI("search/movie", {
            query,
          });
          setResults(results);
        }}
      >
        Search
      </button>
      <div className="results">
        {results.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className="info">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SearchBar;