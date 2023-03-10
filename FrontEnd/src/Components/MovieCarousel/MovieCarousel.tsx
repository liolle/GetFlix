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
    axios.get<Movie[]>('https://getflix-production-8eb4.up.railway.app/api/movies/random?n=10')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bg-black text-white mr-4'>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {movies.map(movie => (
          <div key={movie.movieId} className="relative">
            <a href={movie.videoLink}>
              <img src={movie.image} alt={movie.title} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center">
                  <i className="fa fa-play text-white"></i>
                </button>
              </div>
            </a>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel




