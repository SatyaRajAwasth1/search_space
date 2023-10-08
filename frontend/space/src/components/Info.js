// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Images from './components/Images';
import Videos from './components/Videos';

function Info() {
  return (
    <Router>
      <div className="Info">
        <div className="navigation-bar">
          <Link to="/images">Images</Link>
          <Link to="/videos">Videos</Link>
          {/* Add links for other content types */}
        </div>
        <Switch>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          {/* Add routes for other content types */}
        </Switch>
      </div>
    </Router>
  );
}

export default Info;
