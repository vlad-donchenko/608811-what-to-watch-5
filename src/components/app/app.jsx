import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Login from "../login/login.jsx";

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
