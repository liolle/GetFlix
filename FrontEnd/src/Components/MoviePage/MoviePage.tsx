import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    axios.get<Movie[]>('https://getflix-production-8eb4.up.railway.app/api/movies/random')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <section className='flex flex-col justify-center items-center h-screen w-screen bg-black text-white p-4'>
        {movies.map(movie => (
          <div key={movie.movieId} className='mb-8'>
            <h1 className='text-2xl font-bold mb-2'>{movie.title.toUpperCase()}</h1>
            <img src={movie.image} alt={movie.name} className='mb-2' style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover' }} />
            <div className='flex flex-col'>
              <button className='bg-gradient-to-r from-sky-400 to-sky-900 text-white px-4 py-2 rounded-full mb-4' onClick={() => window.location.href = movie.videoLink}>
                PLAY
              </button>
              <p className='text-lg mb-2'>{movie.types}</p>
              <p className='text-lg mb-2'>{movie.views} views</p>
              <p className='text-lg'>{movie.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <section className='grid grid-cols-3 grid-rows-3 gap-8 h-screen w-screen bg-black text-white p-4'>
        {movies.map(movie => (
           <div key={movie.movieId} className='p-8'>
           
           <img className='mx-auto mb-8' src={movie.image} alt={movie.name} width={300} height={450} />
           
           <div className='flex justify-center mt-8'>
           <button className='bg-gradient-to-r from-sky-400 to-sky-900 text-white px-4 py-2 rounded-full mb-4' onClick={() => window.location.href = movie.videoLink}>
                PLAY
              </button>
           </div>
         </div>
        ))}
         {movies.map(movie => (
          <div key={movie.movieId} className='col-span-2 row-span-3'>
            <h1 className='text-3xl font-bold mb-8'>{movie.title.toUpperCase()}</h1>
            <p className='text-lg mb-8'>{movie.types}</p>
            <p className='text-lg mb-8'>{movie.views} views</p>
            <p className='text-lg'>{movie.description}</p>
          </div>
        ))}
      </section>
    );
  }
};

export default MoviePage;



