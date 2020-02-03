import React, { Component } from 'react';
import Header from '../../common/header/Header';
import MediaCard from '../../common/card/MediaCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
      userProfileData: null,
      userMediaData: null,
    }
  }
  componentWillMount() {
    if (this.state.loggedIn === false) {
      this.props.history.push('/');
    }
    fetch(
      this.props.baseUrl +
      "?access_token=" +
      sessionStorage.getItem("access-token")
    )
      .then(res => res.json())
      .then(
          result => {
            this.setState({userProfileData: result.data});
          },
          error => {
            console.log("Error while fetching user profile data from Instagram.",error);
          }
      );

  fetch(
      this.props.baseUrl +
      "media/recent/?access_token=" +
      sessionStorage.getItem("access-token")
  )
      .then(res => res.json())
      .then(
          result => {
            this.setState({
              userMediaData: result.data,
              filterData: result.data
            });
          },
          error => {
            console.log("Error while fetching user media data from Instagram.",error);
          }
      );  
    
  }
  render() {
    return (
      <div>
        <Header {...this.props} showSearchBarAndProfileIcon={true} />
        <MediaCard {...this.props} />
        <div className="post-card">
        </div>
      </div>
    )
  }
}

export default Home;