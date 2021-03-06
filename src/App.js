import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import LiveFeed from './components/LiveFeed/LiveFeed';
import Uploader from './components/Uploader/Uploader';
import Verify from './components/Verify/Verify';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/uploader" component={Uploader} />
        <Route path="/live" component={LiveFeed} />
        <Route path="/verify" component={Verify} />
      </Switch>
    </div>
  </Router>
)

class App extends Component {

  render() {
    return (
      routing
    );
  }
}

export default App;
