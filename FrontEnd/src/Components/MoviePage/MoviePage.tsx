import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StarIcon } from '@heroicons/react/24/solid'

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
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Movie>('https://getflix-production-8eb4.up.railway.app/api/movies/select');
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-96 h-auto rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-2xl w-full mx-4">
        <h1 className="font-bold text-4xl mb-4">{movie.title}</h1>
        <div className="flex items-center mb-4">
          <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
          <div>{movie.views} views</div>
        </div>
        <p className="text-gray-300 text-lg mb-4">{movie.description}</p>
        <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Details
        </button>
      </div>
    </div>
  );
};

export default MoviePage;

