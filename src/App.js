import './App.css';
import List from './List/List.js';
import Detail from './Detail/Detail.js';
import Create from './Create/Create.js';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/about"  component={Detail} />
            <Route path="/contact"  component={Create} />
          </Switch>
        </div>
      </Router>
    );
  }
}
