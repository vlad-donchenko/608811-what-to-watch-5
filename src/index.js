import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {movies} from "./mock/mock";
import {promo} from "./mock/promo";
import {GENRE_LIST} from "./components/const";

ReactDom.render(<App genreList={GENRE_LIST} promo={promo} movieList={movies}/>, document.querySelector(`#root`));
