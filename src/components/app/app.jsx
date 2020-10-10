import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";
import AuthorizationScreen from "../autorization-screen/autorization-screen.jsx";
import MyListScreen from "../my-list-screen/my-list-screen.jsx";
import MovieDetailsScreen from "../movie-details-screen/movie-details-screen.jsx";
import CreateReviewScreen from "../create-review-screen/create-review-screen.jsx";
import MoviePlayerScreen from "../movie-player-screen/movie-player-screen.jsx";

const App = ({movie, movieList}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainScreen movie={movie} movieList={movieList}/>
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
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  movieList: PropTypes.array.isRequired
};

export default App;
