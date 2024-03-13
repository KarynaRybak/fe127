import axios from 'axios';
import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./_movies.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const baseURL = "https://api.themoviedb.org";
const apiKey = "17e0da8cf7b7cf604e03bfb7f5538076";
const imgBaseUrl = "https://image.tmdb.org/t/p/w400";

  function Movies() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');
  const [total_pages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
    
  useEffect(() => { getMovies(search, page);}, [search, page]);
    
  function getMovies(search, page) {
    let url = search ? `${baseURL}/3/search/movie` : `${baseURL}/3/discover/movie`;
    let params = search ? { api_key: apiKey, query: search, page } : { api_key: apiKey, page };
    axios.get(url, { params })
    .then(response => {
      setMovies(response.data.results);
      response.data.total_pages > 500 ?setTotalPages(500): setTotalPages(response.data.total_pages)
    })
    .catch(error => {
      setError(error.message);
    });
}

  function setMoviesPage(event, value) {
    setPage(value);
}

  function Wishlist(event) {
    event.preventDefault();
    let id = Number(event.currentTarget.getAttribute('data-movie-id'));
    let isFavourited = liked.includes(id);
    if (!isFavourited) {
      let newItem = [...liked, id];
      setLiked(newItem);
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === id) {
          window.localStorage.setItem('movie-' + id, JSON.stringify(movies[i]));
        }
    }
} else {
  let newItem = liked.filter((savedId) => savedId !== id);
  setLiked(newItem);
  window.localStorage.removeItem('movie-' + id);
}
console.log(id);
}
  const searchMovie = (event) => {
    event.preventDefault();
};
  
  return (
  <div>
    <div className='form-search'>
      <form onSubmit={searchMovie}>
        <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-icon">
          <FontAwesomeIcon icon = {faSearch} />
        </button>
        </form>
        </div>
        {error ? (
        <h2>{error}</h2>
        ) : (
          movies && Array.isArray(movies) && (
          <div>
            <div className="movies">
              {movies.map((movie, index) => (
              <div key={index} className="movie">
                <div
                onClick={Wishlist}
                data-movie-id={movie.id}
                className={liked.includes(movie.id) ? 'wishlist active' : 'wishlist'}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <img src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                  <Link to={"/movies/" + movie.id} key={index} className="movie">
                    <h2>{movie.title}</h2>
                    </Link>
                    <p>{movie.overview}</p>
                    </div>
                    ))}
                    </div>
                    <div className='pagination'>
                      <Stack spacing={2}>
                        <Pagination onChange={setMoviesPage} count={total_pages} />
                      </Stack>
                    </div>
            </div>
            )
        )}
  </div>
  );
}
export default Movies;
