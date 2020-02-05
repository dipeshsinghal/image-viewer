import React, { Component } from 'react';
import Header from '../../common/header/Header';
import MediaCard from '../../common/card/MediaCard';
import { Container } from '@material-ui/core';

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
      this.props.history.push('/login');
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
              userMediaData: result.data
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
        <Header {...this.props} showSearchBar={true} showProfileIcon={true} showOnlyLogoutMenu={false} />
        <Container>
            <MediaCard {...this.props} userMediaData={this.state.userMediaData}/>
        </Container>
      </div>
    )
  }
}

export default Home;