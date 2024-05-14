import "./Movies.css";
import { hobbies } from "../data/Hobbies";

export const Movies = () => {
  const movies = hobbies.movies;

  return (
    <div className="moviesContainer">
      <h2 className="moviesTitle">MOVIES</h2>
      <ul className="moviesList">
        {movies.map((movie, index) => (
          <li key={index} className="movieItem">
            <h3>{movie.name}</h3>
            <p>Type: {movie.type}</p>
            <p>Gender: {movie.gender}</p>
            <p>Vote: {movie.vote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
