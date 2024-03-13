import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./tv_show.scss";
import AboutSection from '../AboutUs/AboutSection';

function TVShowList() {
  const [tvShows, setTVShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
          params: {
            api_key: "17e0da8cf7b7cf604e03bfb7f5538076",
            sort_by: 'popularity.desc',
            language: 'en-US',
            page: 1
      }
    });
    setTVShows(response.data.results.slice(0, 15)); 
  } catch (error) {
    setError(error.message);
  }
};

  fetchTVShows();
}, []);

if (error) {
  return <h2>Failed to fetch TV shows: {error}</h2>;
}

  return (
    <div>
      <AboutSection activeLink="TVShow" />
        <div className='top-show-container'>
          <h2>Top 15 TV Shows</h2>
            <ul>
              {tvShows.map(show => (
                <li key={show.id}>
                  <a href={`https://www.themoviedb.org/tv/${show.id}`} target="_blank" rel="noopener noreferrer">
                    <img src={`https://image.tmdb.org/t/p/w400/${show.poster_path}`} alt={show.name} />
                    <div className="show-details">
                      <h3>{show.name}</h3>
                      <p>Rating: {show.vote_average}</p>
                      <p>{show.overview}</p>
                    </div>      
                  </a>
                </li>
              ))}
            </ul>
        </div>
    </div>

  );
}
export default TVShowList;
