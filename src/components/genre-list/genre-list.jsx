import React from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";

const GenreList = ({genreList}) => {
  return (
    <ul className="catalog__genres-list">
      {genreList.map((genreItem, index) => (
        <GenreItem key={`${genreItem}-${index}`} genreItem={genreItem}/>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.array.isRequired
};

export default GenreList;
