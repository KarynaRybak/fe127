import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./celebrities.scss";

function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCelebrities = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/person/popular', {
          params: {
            api_key: "17e0da8cf7b7cf604e03bfb7f5538076",
            language: 'en-US',
            page: 1
          }
        });
        setCelebrities(response.data.results); 
        } catch (error) {
          setError(error.message);
        }
    };

    fetchCelebrities();
  }, []);
    if (error) {
      return <h2>Failed to fetch celebrities: {error}</h2>;
    }
    
    return (
      <div className='celebrities-container'>
        <h2>Popular Celebrities</h2>
        <ul>
          {celebrities.map(celebrity => (
            <li key={celebrity.id}>
              <div className="celebrity-info">
                <img src={`https://image.tmdb.org/t/p/w400/${celebrity.profile_path}`} alt={celebrity.name} />
                <div className="details">
                  <h3>{celebrity.name}</h3>
                    <h4>Known For:</h4>
                      <ul>
                        {celebrity.known_for.map(movie => (
                          <li key={movie.id}>
                            <p>Title: {movie.title}</p>
                          </li>
                        ))}
                      </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Celebrities;
