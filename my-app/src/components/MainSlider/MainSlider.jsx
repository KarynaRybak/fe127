import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import 'swiper/css';
import './main_slider.scss';

const baseURL = "https://api.themoviedb.org";
const apiKey = "17e0da8cf7b7cf604e03bfb7f5538076";
const allMovies = "/3/discover/movie";
const imgBaseUrl = "https://image.tmdb.org/t/p/original";


function MainSlider() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  function getMovies() {
    axios.get(baseURL + allMovies, {
      params: {
        api_key: apiKey,
        page: 1,
      }
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      setError(error.message);
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  } else {
    const items = movies.slice(0,5).map((movie, index) => (
      <SwiperSlide key={index}>
        <Link to={"/movies/" + movie.id} className="movie">
          <img src={imgBaseUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </Link>
      </SwiperSlide>
    ));

    return (
      <div>
        <Swiper
          className='main-slider'
          slidesPerView={1}
        >
          {items}
        </Swiper>
      </div>
    );
  }
}
export default MainSlider;
