import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"



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
          <div key={movie.movieId} className='mb-8 px-8 py-16'>
            <h1 className='text-2xl font-bold mb-2'>{movie.title.toUpperCase()}</h1>
            <img src={movie.image} alt={movie.name} className='mb-2' style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover' }} />
            <div className='flex flex-col'>
              <button className='bg-gradient-to-r from-sky-400 to-sky-900 text-white px-4 py-2 rounded-full mb-4' onClick={() => window.location.href = movie.videoLink}>
                PLAY
              </button>
              <p className='text-lg mb-2'>{movie.types}</p>
              <p className='text-lg'>{movie.description}</p>
              <p className='text-lg mb-2'>{movie.views} views</p>
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <section className='grid grid-cols-3 grid-rows-3 gap-8 h-screen w-screen bg-black text-white p-4'>
        {movies.map(movie => (
           <div key={movie.movieId} className='p-8 px-8 py-16'>
           
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
            <p className='text-lg'>{movie.description}</p>
            <p className='text-lg mb-8'>{movie.views} views</p>
            <div className="flex items-center mb-2">
               <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
               <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
               <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
                        
                      </div>
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 cursor-pointer" />
      </div>

          </div>
        ))}
         
      </section>
    );
  }
};

export default MoviePage;



