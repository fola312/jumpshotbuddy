import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import FeaturesPage from './Feature';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <FeaturesPage />
          <Route path exact="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    );
  }
}

export default App;
