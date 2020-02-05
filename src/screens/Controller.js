import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import Profile from './profile/Profile';

class Controller extends Component {
  constructor(){
    super();
    this.baseUrl = 'https://api.instagram.com/v1/users/self/';
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route name="login" exact path='/login' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
          <Route name="home" exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route name="profile" exact path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
          <Redirect exact from="/" to="login" />
        </div>
      </Router>
    )
  }
}

export default Controller;