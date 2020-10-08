import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-сard/movie-сard.jsx";

const MovieList = ({movieList}) => {
  return (
    <div className="catalog__movies-list">
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          name={movie.name}
          previewImage={movie.previewImage}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired
};

export default MovieList;
