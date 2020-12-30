import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];
      return (
          <Router>
              <h1>
                  Micro Frontend 4
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
                  </h1>
              <p>
                React Version: {reactVersion}
              </p>
              <div>

                  <Link to="/mfe4/">Home</Link>
                  <br />
                  <Link to="/mfe4/a">Route A</Link>
                  <br />
                  <Link to="/mfe4/b">Route B</Link>

                  <hr />

                  {}
                  <Switch>
                      <Route exact path="/mfe4/">
                          <Home />
                      </Route>
                      <Route path="/mfe4/a">
                          <RouteA />
                      </Route>
                      <Route path="/mfe4/b">
                          <RouteB />
                      </Route>
                  </Switch>
              </div>
          </Router>
      );
  }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function RouteA() {
    return (
        <div>
            <h2>Route A</h2>
        </div>
    );
}

function RouteB() {
    return (
        <div>
            <h2>Route B</h2>
        </div>
    );
}


class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('mfe4-element', Mfe4Element);
