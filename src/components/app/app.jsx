import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Login from "../login/login.jsx";
import MyList from "../my-list/my-list.jsx";
import Movie from "../movie/movie.jsx";
import Review from "../rewiew/review.jsx";
import MoviePlayer from "../movie-player/movie-player";

const App = ({movie}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main movie={movie}/>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login/>
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
            <Review ownProps={ownProps}/>
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
    genre: PropTypes.string,
    releaseDate: PropTypes.string
  })
};

export default App;
