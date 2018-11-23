import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import News from './components/News';
import product from './components/Product';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <header className="header">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/product">Product</Link>

        </header>
        

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/product" component={product} />
        <Route path="/content/:newId" component={Content} />
      </div>
    </Router>
    );
  }
}

export default App;
