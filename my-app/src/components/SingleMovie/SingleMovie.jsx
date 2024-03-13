import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const baseURL = "https://api.themoviedb.org";
const apiKey = "17e0da8cf7b7cf604e03bfb7f5538076";
const singleMovie = "/3/movie/"; 
const imgBaseUrl = "https://image.tmdb.org/t/p/w400";

function SingleMovie() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`${baseURL}${singleMovie}${movieId}`, {
          params: {
            api_key: apiKey
          }
        });
        setMovie(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovie();
  }, [movieId]);

  if (error) {
    return (
      <h2>{error}</h2>
    );
  } else if (movie) {
    return (
      <div className="movie">
        <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    );
  } else {
    return null;
  }
}
export default SingleMovie;
