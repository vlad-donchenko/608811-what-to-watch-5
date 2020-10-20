import React from "react";
import PropTypes from "prop-types";
import MovieCardSmall from "../movie-сard-small/movie-сard-small.jsx";
import widthActiveVideo from "../../hocs/with-active-video";

const MovieCardSmallWrapper = widthActiveVideo(MovieCardSmall);

const MovieList = ({movieList}) => {
  return (
    <div className="catalog__movies-list">
      {movieList.map((movie) => (
        <MovieCardSmallWrapper
          key={movie.id}
          id={movie.id}
          name={movie.name}
          videoSrc={movie.previewVideoLink}
          posterImage={movie.previewImage}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired
};

export default MovieList;
