import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    let thisObj = this;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        thisObj.setState({ userProfileData: JSON.parse(this.responseText) });
      }
    });

    xhr.open("GET", this.props.baseUrl + '?access_token=' + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send();

    let xhrMedia = new XMLHttpRequest();
    xhrMedia.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        thisObj.setState({ userMediaData: JSON.parse(this.responseText) });
      }
    });

    xhr.open("GET", this.props.baseUrl + 'media/recent/?access_token=' + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send();
  }
  render() {
    return (
      <div>
        <Header {...this.props} showSearchBarAndProfileIcon={true} />
        <div className="post-card">
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">Avatar</Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="User"
              subheader='Date'
            />
            <CardMedia
              // image={img1.jpg}
              title='Image'
            />
            <CardContent>
              <Typography component="p">
                Content
           </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
            <CardContent>

            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home;