import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Movie {
  movieId: number;
  name: string;
  videoLink: string;
  title: string;
  description: string;
  types: string;
  views: number;
  image: string;
}

const MovieCarousel: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get<Movie[]>('https://getflix-production-8eb4.up.railway.app/api/movies/random')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

  return (
  
    <section className='grid grid-cols-3 grid-rows-3 gap-8 h-screen w-screen bg-black text-white mr-4'>
  {movies.map(movie => (
    <div key={movie.movieId} className="relative grid grid-cols-3 grid-rows-2">
      <div className="header col-span-3">
        <h3>{movie.title}</h3>
      </div>
      <div className="leftSide row-span-2">
      <p>{movie.description}</p>
      </div>
      <div className="body col-span-2 row-span-2">
        <a href={movie.videoLink}>
          <img src={movie.image} alt={movie.title} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center">
              <i className="fa fa-play text-white"></i>
            </button>
          </div>
        </a>
      </div>
      <div className="rightSide col-span-1 row-span-2">
        <p>{movie.description}</p>
      </div>
      <div className="footer col-span-3">
        <p>{movie.views}</p>
      </div>
    </div>
  ))}
</section>


  );
};

export default MovieCarousel




