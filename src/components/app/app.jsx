import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";
import AuthorizationScreen from "../autorization-screen/autorization-screen.jsx";
import MyListScreen from "../my-list-screen/my-list-screen.jsx";
import MovieDetailsScreen from "../movie-details-screen/movie-details-screen.jsx";
import CreateReviewScreen from "../create-review-screen/create-review-screen.jsx";
import MoviePlayerScreen from "../movie-player-screen/movie-player-screen.jsx";

const App = ({genreList, promo, movieList}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainScreen genreList={genreList} promo={promo} movieList={movieList}/>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <AuthorizationScreen/>
          )}
        />
        <Route
          exact
          path="/mylist"
          render={() => (
            <MyListScreen/>
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={(ownProps) => (
            <MovieDetailsScreen ownProps={ownProps}/>
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={(ownProps) => (
            <CreateReviewScreen ownProps={ownProps}/>
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={(ownProps) => (
            <MoviePlayerScreen ownProps={ownProps}/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }),
  movieList: PropTypes.array.isRequired,
  genreList: PropTypes.array.isRequired
};

export default App;
