import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./TopMovies.scss";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key:"17e0da8cf7b7cf604e03bfb7f5538076",
            sort_by: 'popularity.desc',
            language: 'en-US',
            page: 1,
            'vote_count.gte': 1000,
          }
  });
    setTopMovies(response.data.results.slice(0, 12)); 
} catch (error) {
  setError(error.message);
}
};

  fetchTopMovies();
  }, []);

  if (error) {
    return <h2>Failed to fetch top movies: {error}</h2>;
  }

  return (
    <div className="top-movies-container">
      <h2>Top 12 Movies</h2>
      <ul>
        {topMovies.map(movie => (
          <li key={movie.id}>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer">
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title} />
              <span className="movie-title">{movie.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopMovies;
