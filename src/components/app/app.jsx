import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";
import AuthorizationScreen from "../autorization-screen/autorization-screen.jsx";
import MyList from "../my-list/my-list.jsx";
import Movie from "../movie/movie.jsx";
import CreateReview from "../create-review/create-review.jsx";
import MoviePlayer from "../movie-player/movie-player";

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
            <MyList/>
          )}
        />
        <Route
          exact
          path="/films/:id"
          render={(ownProps) => (
            <Movie ownProps={ownProps}/>
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={(ownProps) => (
            <CreateReview ownProps={ownProps}/>
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={(ownProps) => (
            <MoviePlayer ownProps={ownProps}/>
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
