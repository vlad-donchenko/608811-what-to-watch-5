import React from "react";

const GenreItem = ({genreItem}) => {
  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">{genreItem}</a>
    </li>
  );
};

export default GenreItem;
