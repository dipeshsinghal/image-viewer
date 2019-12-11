import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
        userProfileData : null,
    }
  }
  componentWillMount() {
    if ( this.state.loggedIn === false ) {
      this.props.history.push('/');
    }
    let thisObj = this;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        thisObj.setState({ userProfileData: JSON.parse(this.responseText) });
        console.log(thisObj.state.userProfileData);
      }
    });

    xhr.open("GET", this.props.baseUrl + '?access_token=' + sessionStorage.getItem('access-token') );
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send();
  }
  render() {
    return (
      <div>
        <Header {...this.props} showSearchBarAndProfileIcon={true} />
      </div>
    )
  }
}

export default Home;