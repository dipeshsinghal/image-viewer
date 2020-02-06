import React, { Component } from 'react';
import Header from '../../common/header/Header';
import MediaGrid from '../../common/grid/MediaGrid';
import { Container } from '@material-ui/core';
import './Profile.css';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
      userProfileData: null,
      userRecentMediaData: null,
    }
  }

  componentWillMount() {
    if (this.state.loggedIn === false) {
      this.props.history.push('/login');
    }
    fetch(
      this.props.baseUrl + "?access_token=" +
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
      this.props.baseUrl + "media/recent/?access_token=" +
      sessionStorage.getItem("access-token")
  )
      .then(res => res.json())
      .then(
          result => {
            this.setState({
              userRecentMediaData: result.data
            });
          },
          error => {
            console.log("Error while fetching user recent media data from Instagram.",error);
          }
      );  
    
  }
  render() {
    return (
      <div>
        <Header {...this.props} showSearchBar={false} showProfileIcon={true} showOnlyLogoutMenu={true} />
        <Container>
          <MediaGrid {...this.props}  userRecentMediaData={this.state.userRecentMediaData} />
        </Container>
      </div>
    )
  }
}

export default Profile;