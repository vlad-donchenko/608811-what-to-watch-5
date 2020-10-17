import React from "react";
import PropTypes from "prop-types";

const GenreItem = ({genreItem}) => {
  return (
    <li className={`catalog__genres-item ${genreItem === `All genres` ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link">{genreItem}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genreItem: PropTypes.string.isRequired
};

export default GenreItem;
