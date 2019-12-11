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
            </Switch>
          </Router>
        </main>

      </>
    );
  }
}

export default App;
