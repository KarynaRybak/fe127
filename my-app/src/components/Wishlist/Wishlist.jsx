import { useEffect, useState } from "react";
import "./wishlist.scss";

const imgBaseUrl = "https://image.tmdb.org/t/p/w400";

function Wishlist () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('movie-')){
        let movieItem = JSON.parse(localStorage.getItem(key));
        items.push(movieItem)
        }
      }
      setMovies(items);
    },[]);

    const remove = (id) => {
      const updatedMovies = movies.filter(movie => movie.id !== id);
      setMovies(updatedMovies);
      localStorage.removeItem('movie-' + id);
    };

    if (movies && movies.length > 0) {
      const items = movies.map((movie, index) => {
        return (
        <div key={index} className="movie">
          <img src={imgBaseUrl + movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <button onClick={() => remove(movie.id)}>Remove</button>
        </div>
        )
    });
      return (
        <div>{items}</div>
    );
    } else {
      return <div>No movies in wishlist</div>;
    }
}
export default Wishlist;
