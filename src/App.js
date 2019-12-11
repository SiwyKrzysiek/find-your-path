import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

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

        <main className="container">
          <div className="row">

            <div className="card col-3 navigation">
              <div className="card-body">
                <h5 className="card-title">Navigation</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>

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

      </>
    );
  }
}

export default App;
