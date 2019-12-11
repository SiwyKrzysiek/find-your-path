import React from "react";
import {
  HashRouter as Router, // Browser router doesn't work with Github pages
  Route,
  Link,
  Switch,
  matchPath,
  Redirect
} from "react-router-dom";

import Home from "./Home";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Cellar from "./Cellar";
import Bookcase from "./Bookcase";
import SecretSpot from "./SecretSpot";
import Outside from "./Outside";
import { createSampleBooks } from "./model/Book";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      books: createSampleBooks()
    };

    // this.authenticate = this.authenticate.bind(this);
  }

  authenticate = (login, password) => {
    // Everyone is authenticated
    this.setState({ logged: true });
    console.log(login, password);
    console.log("You have been logged in");
  }

  render() {
    return (
      <>
        <section className="container logo">
          <h2>Find your own path</h2>
        </section>

        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/cellar" render={(props) => <Cellar {...props} logged={this.state.logged} />} />
              <Route path="/bookcase" render={(props) => (
                <Bookcase {...props} logged={this.state.logged} onLogin={this.authenticate} books={this.state.books} />)
              } />
              <PrivateRoute path="/secret" isAuthenticated={this.state.logged} failPath="/outside" component={SecretSpot} />
              <Route path="/outside" component={Outside} />
            </Switch>
          </Router>
        </main>
      </>
    );
  }
}

export default App;
