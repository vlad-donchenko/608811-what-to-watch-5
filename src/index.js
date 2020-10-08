import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {formatReleaseDate} from "./utils";
import {movies} from "./mock/mock";

const movie = {
  genre: `Drama`,
  releaseDate: formatReleaseDate(`2020-09-28 18:02Z`)
};

ReactDom.render(<App movie={movie} movieList={movies}/>, document.querySelector(`#root`));
