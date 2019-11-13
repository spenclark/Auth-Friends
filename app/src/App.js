import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friend List</Link>
        <Switch >
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
