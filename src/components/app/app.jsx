import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({movie}) => {
  return <Main movie={movie}/>;
};

App.propTypes = {
  movie: PropTypes.shape({
    genre: PropTypes.string,
    releaseDate: PropTypes.string
  })
};

export default App;
