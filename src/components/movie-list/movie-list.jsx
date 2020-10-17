import React from "react";
import PropTypes from "prop-types";
import MovieCardSmall from "../movie-сard-small/movie-сard-small.jsx";

const MovieList = ({movieList}) => {
  return (
    <div className="catalog__movies-list">
      {movieList.map((movie) => (
        <MovieCardSmall
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
