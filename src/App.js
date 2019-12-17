import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import CustomerList from './components/CustomerList'
import Library from './components/Library'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return <h2>Home</h2>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>            
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={SearchBar} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={CustomerList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


