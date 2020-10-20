import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCardSmall = ({id, name, posterImage, videoSrc, onPlayerMouseEnter, onPlayerMouseOut, isPlaying}) => {

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onPlayerMouseEnter}
      onMouseOut={onPlayerMouseOut}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isPlaying}
          src={videoSrc}
          poster={posterImage}
          muted
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCardSmall.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  onPlayerMouseEnter: PropTypes.func.isRequired,
  onPlayerMouseOut: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCardSmall;
