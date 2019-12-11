import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  matchPath,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Navigation from "./Navigation.js"

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

        <Router>
          <main className="container">
            <div className="row">

              <Navigation></Navigation>

              <div className="card col" style={{ "width": "18rem;" }}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p clasclassNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="google.com" className="btn btn-primary">Go somewhere</a>
                </div>
              </div >

            </div>
          </main>
        </Router>

      </>
    );
  }
}

export default App;
