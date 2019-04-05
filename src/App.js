import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import FeaturesPage from './Feature';

import Court2 from './Court';
import StatTracker from './StatTracker';






class App extends Component {
  constructor() {
    super()
    this.state = {
      shotPosition: '',
      shotsMade: '',

    }
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
          <FeaturesPage />
          <Court2 />
          <StatTracker />
          <Route path exact="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    );
  }
}

export default App;
