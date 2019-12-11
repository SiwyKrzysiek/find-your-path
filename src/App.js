import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  matchPath,
  Redirect
} from "react-router-dom";

import Home from "./Home"

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Cellar from './Cellar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false
    }
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
              <Route path="/cellar" component={Cellar} />
            </Switch>
          </Router>
        </main>

      </>
    );
  }
}

export default App;
