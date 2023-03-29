import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/24/solid';
import ProfileSection from "./ProfileSection";

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

const host =  "https://get-flix-back-end-liolle.vercel.app"

const ProfilePage: React.FC = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);
  const [suggestedMovies, setSuggestedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get<Movie[]>(host+'/api/movies/select?title=The%20dictator/')
      .then(response => {
        setFavoriteMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get<Movie[]>(host+'/api/movies/select?title=Gladiator/')
      .then(response => {
        setWatchlistMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get<Movie[]>(host+'/api/movies/select?title=One%20Piece%3A%20Strong%20World/')
      .then(response => {
        setSuggestedMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
return (
    <div className="min-h-screen bg-black text-white">
      <div className="container flex flex-col mx-auto py-12 px-4 sm:px-6 lg:px-8">


        <section className='  bg-neutral-500 rounded-lg h-[200px] mb-12 overflow-hidden '>
          {/* <h1 className="font-bold text-3xl mb-8">My Profile</h1> */}
          <ProfileSection/>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="font-bold text-2xl mb-4">Favorite Movies</h2>
              {favoriteMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {favoriteMovies.map(movie => (
                    <div key={movie.movieId} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                        <div className="flex items-center mb-2">
                          <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
                          <div>{movie.views} views</div>
                        </div>
                        <p className="text-gray-500 text-sm">{movie.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>No favorite movies to display.</div>
              )}
            </section>
            <section>
              <h2 className="font-bold text-2xl mb-4">Watchlist</h2>
              {watchlistMovies.map(movie => (
                <div key={movie.movieId} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={movie.image} alt={movie.title} className="w-full h-auto" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                    <div className="flex items-center mb-2">
                      <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
                      <div>{movie.views} views</div>
                    </div>
                    <p className="text-gray-500 text-sm">{movie.description}</p>
                  </div>
                </div>
              ))}
              {watchlistMovies.length === 0 && <div>No movies in your watchlist.</div>}
            </section>

            <section>
              <h2 className="font-bold text-2xl mb-4">Suggested Movies</h2>
              {suggestedMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {suggestedMovies.map(movie => (
                    <div key={movie.movieId} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img src={movie.image} alt={movie.title} className="w-full h-auto" />
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                        <div className="flex items-center mb-2">
                          <StarIcon className="w-6 h-6 text-yellow-400 mr-1" />
                          <div>{movie.views} views</div>
                        </div>
                        <p className="text-gray-500 text-sm">{movie.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>No suggested movies to display.</div>
              )}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage
