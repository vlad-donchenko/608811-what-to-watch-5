import React from "react";
import PropTypes from "prop-types";

const MovieCardPoster = ({src, title}) => {
  return (
    <div className="movie-card__poster">
      <img src={src} alt={title} width="218" height="327"/>
    </div>
  );
};

MovieCardPoster.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieCardPoster;
