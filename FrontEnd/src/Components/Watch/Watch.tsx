import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  id: string;
  title: string;
  image: string;
  videoLink: string;
  description: string;
  rating: number; // Ajout de la propriété rating
  type: string; // Ajout de la propriété type
}

const View = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null); // Ajout de la gestion d'erreur

  useEffect(() => {
    axios
      .get('https://getflix-production-8eb4.up.railway.app/api/movies/random')
      .then((response) => setMovie(response.data))
      .catch((error) => setError('Une erreur est survenue lors du chargement des données')); // Gestion de l'erreur
  }, []);

  if (error) {
    return <div>Une erreur est survenue : {error}</div>; // Affichage de l'erreur
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/3">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="w-1/3">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
     
    </div>
  );
};

export default View;

  