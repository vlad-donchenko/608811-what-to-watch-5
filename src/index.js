import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {formatReleaseDate} from "./utils";

const movie = {
  genre: `Drama`,
  releaseDate: formatReleaseDate(`2020-09-28 18:02Z`)
};

ReactDom.render(<App movie={movie}/>, document.querySelector(`#root`));
